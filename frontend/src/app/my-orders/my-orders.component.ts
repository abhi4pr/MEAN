import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import {val} from '../reusable';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orderData:any = [];

  constructor(
    private http:HttpClient,
    private route:Router,
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+`getallorderuser/${val}`)
    .subscribe(
      (data)=>{ this.orderData = data },
      (err) =>{ console.log(err)}
    )
  }

}
