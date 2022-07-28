import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orderData:any = '';
  productData:any = '';
  userData:any = '';

  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+'getusercount')
    .subscribe(
      (data)=>{ 
        this.userData = data
      },
      (err) =>{ console.log(err)}
    )

    this.http.get(environment.apiUrl+'getproductcount')
    .subscribe(
      (data)=>{ 
        this.productData = data
      },
      (err) =>{ console.log(err)}
    )

    this.http.get(environment.apiUrl+'getordercount')
    .subscribe(
      (data)=>{ 
        this.orderData = data
      },
      (err) =>{ console.log(err)}
    )
  }

}
