import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  categoryData:any = [];
  productData:any = [];
  id = this.route1.snapshot.params['id'];
  name:any = '';
  price:any = '';
  category:any = '';
  selectedFile:any = '';

  constructor(
    private http:HttpClient,
    private route:Router,
    private route1:ActivatedRoute,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+`getsingleproduct/${this.id}`)
    .subscribe(
      (result)=>{ this.productData = result },
      (err) =>{ console.log(err) }
    )

    this.http.get(environment.apiUrl+'getallcategory')
    .subscribe(
      (data)=>{ this.categoryData = data },
      (err) =>{ console.log(err)}
    )
  }

  onImageUpload(event:any){
    this.selectedFile = event.target.files[0];
  }

  onSubmit(proForm:any){
    const proData = new FormData();
    proData.append('name',proForm.name);  
    proData.append('description',proForm.description);  
    proData.append('brand',proForm.brand);  
    proData.append('price',proForm.price);  
    proData.append('category',proForm.category);  
    proData.append('countInStock',proForm.countInStock);
    proData.append('image',this.selectedFile, this.selectedFile.name);

    this.http.put(environment.apiUrl+`editproduct/${this.id}`,proData)
    .subscribe(
      (result)=>{
        this.toast.success({detail:"SUCCESS",summary:'Product edited Successfully',duration:5000});
        this.route.navigate(['/admin/aproducts'])
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});  
      }
  )}

}
