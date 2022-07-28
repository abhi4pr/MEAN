import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import {val} from '../reusable';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartData:any = [];
  cartTotal:any = '';
  zip:any = '';
  phone:any = '';

  constructor(
    private http:HttpClient,
    private route1:ActivatedRoute,
    private route:Router,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+`getusercart/${val}`)
    .subscribe(
      (data)=>{ 
        this.cartData = data
        this.cartTotal = this.cartData.products.reduce((total: number, obj: { price: number; quantity: number; }) => obj.price*obj.quantity + total,0);
      },
      (err) =>{ console.log(err)}
    )
  }

  onSubmit(checkForm:any){
    var changeKey = this.cartData.products.map((item:any) => {
      return {
        product: item.productId,
        quantity: item.quantity
      };
    });
    var productData = {orderItems:changeKey};
    var userData = {user:val,...checkForm};
    var finalData = {...productData,...userData};
    
    this.http.post(environment.apiUrl+'addorder',finalData)
    .subscribe(
      (result:any)=>{
          this.toast.success({detail:"SUCCESS",summary:'Order Placed Successfully',duration:5000});
          this.route.navigate(['/myorders']);
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});
      }
    )
  }

}