import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import {val} from '../reusable';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData:any = [];
  cartTotal:any = '';

  constructor(
    private http:HttpClient,
    private route1:ActivatedRoute,
    private route:Router,
    private toast:NgToastService,
    private cartService:CartService
  ) { }

  getCart(){
    this.http.get(environment.apiUrl+`getusercart/${val}`)
    .subscribe(
      (data)=>{ 
        this.cartData = data;
        this.cartTotal = this.cartData.products.reduce((total: number, obj: { price: number; quantity: number; }) => obj.price*obj.quantity + total,0);
      },
      (err) =>{ console.log(err)}
    )
  }

  ngOnInit(): void {
    this.getCart();
  }

  // send notify to header component to update cartCount in header
  notifyForChange() {
    this.cartService.notifyAboutChange();
  }

  onRemoveItem(cartForm:any){
    this.http.post(environment.apiUrl+`removecartitem/${this.cartData._id}`,cartForm)
    .subscribe(
      (result:any)=>{
          this.toast.success({detail:"SUCCESS",summary:'Item Removed',duration:5000});
          this.getCart();
          this.notifyForChange();
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});
      }
    )
  }

  onDeleteCart(){
    this.http.delete(environment.apiUrl+`deletecart/${this.cartData._id}`)
    .subscribe(
      (result:any)=>{
          this.toast.success({detail:"SUCCESS",summary:'Cart Deleted',duration:5000});
          this.route.navigate(['/profile']);
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});
      }
    )
  }

  onUpdateCart(productId:any,value:any){    
    this.http.put(environment.apiUrl+`updatecart/${productId}`,{user:val,productId:productId,quantity:value})
    .subscribe(
      (result:any)=>{
          this.toast.success({detail:"SUCCESS",summary:'Cart Updated',duration:5000});
          this.getCart();
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});
      }
    )
  }

}
