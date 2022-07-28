import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any = '';

  constructor(
    private http:HttpClient,
    private route:Router,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    const adminToken = localStorage.getItem("adminToken");
    const userToken = localStorage.getItem("userToken");
      if(adminToken){
        this.route.navigate(['/admin/dashboard/']);
      }else if(userToken){
        this.route.navigate(['/profile']);
      }
  }

  onSubmit(logForm:any){
    this.http.post(environment.apiUrl+'loginuser',logForm)
    .subscribe(
      (result:any)=>{
        if (result.user.isAdmin == false) {
          localStorage.setItem('userToken', JSON.stringify(result.token));
          window.location.href = '/profile';
          this.toast.success({detail:"SUCCESS",summary:'Logged-In Successfully',duration:5000});
        } else {
          localStorage.setItem('adminToken', JSON.stringify(result.token));
          this.toast.success({detail:"SUCCESS",summary:'Logged-In Successfully',duration:5000});
          this.route.navigate(['/admin/dashboard']);
        }
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});
      }
  )}

}
