import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryData:any = [];
  id = this.route1.snapshot.params['id'];
  name:any = '';

  constructor(
    private http:HttpClient,
    private route:Router,
    private route1:ActivatedRoute,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+`getsinglecategory/${this.id}`)
    .subscribe(
      (result)=>{ this.categoryData = result },
      (err) =>{ console.log(err) }
    )
  }

  onSubmit(catForm:any){
    this.http.put(environment.apiUrl+`editcategory/${this.id}`,catForm)
    .subscribe(
      (result)=>{
        this.toast.success({detail:"SUCCESS",summary:'Category edited Successfully',duration:5000});
        this.route.navigate(['/admin/categories'])
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});  
      }
  )}

}
