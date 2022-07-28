import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name:any = '';
  price:any = '';
  category:any = '';
  categoryData:any = [];
  selectedFile:any = '';

  constructor(
    private http:HttpClient,
    private route:Router,
    private toast:NgToastService
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+'getallcategory')
    .subscribe(
      (data)=>{ this.categoryData = data },
      (err) =>{ console.log(err)}
    )
  }

  onImageUpload(event:any){
    this.selectedFile = event.target.files[0];
    // if (file) {
    // const fileReader = new FileReader();
    // to show image after upload
    // fileReader.onload = () =>{ this.imageDisplay = fileReader.result }
    // fileReader.readAsDataURL(file);
    // }
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

    this.http.post(environment.apiUrl+'addproduct',proData)
    .subscribe(
      (result)=>{
        this.toast.success({detail:"SUCCESS",summary:'Product Created Successfully',duration:5000});
        this.route.navigate(['/admin/aproducts'])
      },
      (err) =>{
        this.toast.error({detail:"ERROR",summary:err,duration:5000});  
      }
    )
  }

}
