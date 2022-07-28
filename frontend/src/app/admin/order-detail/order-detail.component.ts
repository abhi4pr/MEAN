import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderData:any = [];
  id = this.route1.snapshot.params['id'];

  constructor(
    private http:HttpClient,
    private route:Router,
    private route1:ActivatedRoute,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+`getsingleorder/${this.id}`)
    .subscribe(
      (result)=>{ this.orderData = result },
      (err) =>{ console.log(err) }
    )
  }

  onSubmit(orderForm:any){
    this.http.put(environment.apiUrl+`editorder/${this.id}`,orderForm)
    .subscribe(
      (result)=>{
        this.toast.success({detail:"SUCCESS",summary:'Status updated Successfully',duration:5000});
        this.route.navigate(['/admin/aorders'])
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});  
      }
  )}

}
