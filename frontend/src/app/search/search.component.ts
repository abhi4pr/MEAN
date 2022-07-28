import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productData:any = [];
  name:any = this.route1.snapshot.queryParamMap.get('name'); // to get query params
  //id = this.route1.snapshot.params['id']; to get variable id from url

  constructor(
    private http:HttpClient,
    private route1:ActivatedRoute,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.route1.paramMap.subscribe(params => { // to reload same component with differ ID
      this.http.get(environment.apiUrl+`search`,{params:{name:this.name}})
      .subscribe(
        (result)=>{ this.productData = result },
        (err) =>{ console.log(err) }
      )
    });
  }

}
