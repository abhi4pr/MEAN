import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-aproducts',
  templateUrl: './aproducts.component.html',
  styleUrls: ['./aproducts.component.css']
})
export class AproductsComponent implements OnInit {

  productData:any = [];
  showLoader:boolean = false;

  constructor(
    private http:HttpClient,
    private toast:NgToastService
  ) { }

  getData(): void {
    this.showLoader = true;
    this.http.get(environment.apiUrl+'getallproduct')
    .subscribe(
      (data)=>{ 
        this.productData = data
        this.showLoader = false;
      },
      (err) =>{ console.log(err)}
    )
  }

  ngOnInit(): void {
    this.getData();
  }

  deleteProduct(_id:any): void{
    this.http.delete(environment.apiUrl+`deleteproduct/${_id}`)
    .subscribe(
      (data)=>{
        this.toast.success({detail:"SUCCESS",summary:'Product deleted Successfully',duration:5000});
        this.getData();
      }
    )
  }

}
