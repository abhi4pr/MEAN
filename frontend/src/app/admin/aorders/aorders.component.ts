import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-aorders',
  templateUrl: './aorders.component.html',
  styleUrls: ['./aorders.component.css']
})
export class AordersComponent implements OnInit {

  orderData:any = [];

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+'getallorder')
    .subscribe(
      (data)=>{ this.orderData = data },
      (err) =>{ console.log(err)}
  )}

}
