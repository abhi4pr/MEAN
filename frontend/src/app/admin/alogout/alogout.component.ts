import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alogout',
  templateUrl: './alogout.component.html',
  styleUrls: ['./alogout.component.css']
})
export class AlogoutComponent implements OnInit {

  constructor(
    private route:Router,
  ) { }

  ngOnInit(): void {
    localStorage.removeItem("adminToken");
    this.route.navigate(['/login']);
  }

}
