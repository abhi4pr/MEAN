import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryData:any = [];
  id = this.route1.snapshot.params['id'];
  showLoader:boolean = false;

  constructor(
    private http:HttpClient,
    private route:Router,
    private route1:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route1.paramMap.subscribe(params => { // to reload same component with differ ID
      this.id = params.get('id');
        this.http.get(environment.apiUrl+`getproductsbycategory`,{ params: {categories:this.id} })
        .subscribe(
          (result)=>{ this.categoryData = result },
          (err) =>{ console.log(err) }
        )
    });    
  }

}
