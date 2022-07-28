import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email:any = '';

  constructor(
    private http:HttpClient,
    private route:Router,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(coForm:any){
    this.http.post(environment.apiUrl+'sendmail',coForm)
    .subscribe(
      (result)=>{
        this.toast.success({detail:"SUCCESS",summary:'Thank you for Contacting',duration:5000});
        this.route.navigate(['/contact'])
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});  
      }
  )
  }

}
