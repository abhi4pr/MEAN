import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {val} from '../reusable';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryData:any = [];
  cartCountData:any = 0;
  value:any = {userID:val};

  constructor(
    private http:HttpClient,
    private route:Router,
    private cartService:CartService
  ) { }

  getCategories(){
    this.http.get(environment.apiUrl+'getallcategory')
    .subscribe(
      (data)=>{ this.categoryData = data },
      (err) =>{ console.log(err)}
    )
  }

  getCartCount(){
    this.http.get(environment.apiUrl+`getcartcount/${this.value.userID}`)
    .subscribe(
      (data)=>{ this.cartCountData = data },
      (err) =>{ console.log(err)}
    )
  }

  // update cart count in header on add to cart
  notifierSubscription: Subscription = this.cartService.subjectNotifier.subscribe(notified => {
    this.getCartCount();
  });

  ngOnInit(): void {    
    this.getCartCount();
    this.getCategories();
  }

}
