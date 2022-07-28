import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:any = '';

  constructor(
    private http:HttpClient,
    private route:Router,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(regForm:any){
    this.http.post(environment.apiUrl+'registeruser',regForm)
    .subscribe(
      (result:any)=>{
          this.toast.success({detail:"SUCCESS",summary:'Registered Successfully',duration:5000});
          this.route.navigate(['/login']);
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});
      }
    )
  }

}
