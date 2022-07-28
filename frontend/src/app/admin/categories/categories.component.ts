import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgToastService } from 'ng-angular-popup';
declare var $:any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryData:any = [];
  showLoader:boolean = false;

  constructor(
    private http:HttpClient,
    private toast:NgToastService
  ) { }

  getData(): void {
    this.showLoader = true;
    this.http.get(environment.apiUrl+'getallcategory')
    .subscribe(
      (data)=>{ 
        this.categoryData = data
        this.showLoader = false;
      },
      (err) =>{ console.log(err)}
    )
  }

  ngOnInit(): void {
    this.getData();
  }

  deleteCategory(_id:any): void{
    this.http.delete(environment.apiUrl+`deletecategory/${_id}`)
    .subscribe(
      (data)=>{
        this.toast.success({detail:"SUCCESS",summary:'Category deleted Successfully',duration:5000});
        this.getData();
      }
    )
  }

}