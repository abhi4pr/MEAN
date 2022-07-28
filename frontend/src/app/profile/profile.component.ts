import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import {val} from '../reusable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData:any='';
  name:any='';
  email:any='';
  password:any='';
  address:any='';
  phone:any='';

  constructor(
    private http:HttpClient,
    private route:Router,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+`getsingleuser/${val}`)
    .subscribe(
      (result)=>{ this.profileData = result },
      (err) =>{ console.log(err) }
    )
  }

  onSubmit(proForm:any){
    this.http.put(environment.apiUrl+`edituser/${val}`,proForm)
    .subscribe(
      (result:any)=>{
          this.toast.success({detail:"SUCCESS",summary:'Profile Updated Successfully',duration:5000});
          this.route.navigate(['/profile']);
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});
      }
    )
  }

}
