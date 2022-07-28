import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {val} from '../reusable';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productData:any = [];

  constructor(
    private http:HttpClient,
    private toast:NgToastService,
    private route:Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+'getallproduct')
    .subscribe(
      (data)=>{ 
        this.productData = data
      },
      (err) =>{ console.log(err)}
    )
  }

  // send notify to header component to update cartCount in header
  notifyForChange() {
    this.cartService.notifyAboutChange();
  }

  addToCart(cartForm:any){
    const userId = {user:val,quantity:1};
    const allValues = {...userId,...cartForm};
    
    this.http.post(environment.apiUrl+`addcart`,allValues)
    .subscribe(
      (result:any)=>{
          this.toast.success({detail:"SUCCESS",summary:'Item added to Cart',duration:5000});
          this.notifyForChange();
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:'You are not logged in',duration:5000});
      }
    )
  }

}
