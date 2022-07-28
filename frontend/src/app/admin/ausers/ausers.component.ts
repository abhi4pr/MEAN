import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ausers',
  templateUrl: './ausers.component.html',
  styleUrls: ['./ausers.component.css']
})
export class AusersComponent implements OnInit {

  userData:any = [];

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(environment.apiUrl+'getallusers')
    .subscribe(
      (data)=>{ this.userData = data },
      (err) =>{ console.log(err)}
  )}

}
