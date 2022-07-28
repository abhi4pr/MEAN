import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  name:any = '';

  constructor(
    private http:HttpClient,
    private route:Router,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(catForm:any){
    this.http.post(environment.apiUrl+'addcategory',catForm)
    .subscribe(
      (result)=>{
        this.toast.success({detail:"SUCCESS",summary:'Category Created Successfully',duration:5000});
        this.route.navigate(['/admin/categories'])
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});  
      }
  )}

}
