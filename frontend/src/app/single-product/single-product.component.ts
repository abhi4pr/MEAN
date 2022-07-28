import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import {val} from '../reusable';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  productData:any = [];
  allProductData:any = [];
  id = this.route1.snapshot.params['id'];

  constructor(
    private http:HttpClient,
    private route1:ActivatedRoute,
    private route:Router,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.route1.paramMap.subscribe(params => { // to reload same component with differ ID
      this.id = params.get('id');
        this.http.get(environment.apiUrl+`getsingleproduct/${this.id}`)
        .subscribe(
          (result)=>{ this.productData = result },
          (err) =>{ console.log(err) }
        )
    });
      
    this.http.get(environment.apiUrl+'getallproduct')
    .subscribe(
      (data)=>{ 
        this.allProductData = data
      },
      (err) =>{ console.log(err)}
    )
  }

  addToCart(cartForm:any){
    const userId = {user:val,quantity:1};
    const allValues = {...userId,...cartForm};
    
    this.http.post(environment.apiUrl+`addcart`,allValues)
    .subscribe(
      (result:any)=>{
          this.toast.success({detail:"SUCCESS",summary:'Item added to Cart',duration:5000});
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:'You are not logged in',duration:5000});
      }
    )
  }

}
