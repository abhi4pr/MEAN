// update header component on button click in home component

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  subjectNotifier: Subject<null> = new Subject<null>();
 
  constructor() { }
 
  notifyAboutChange() {
    this.subjectNotifier.next(null);
  }
}