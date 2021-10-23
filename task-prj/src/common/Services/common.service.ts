import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  sidebarToggler$ = new Subject<void>();
  isAuth$ = new BehaviorSubject<void>(null);
  constructor() {
  }
}
