import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

//for all the common tasks,observables that can be used in the entire project
//are instantiated here.
export class CommonService {

  sidebarToggler$ = new Subject<void>();
  isAuth$ = new BehaviorSubject<void>(null);
  washNotification$ =  new Subject<void>();
  constructor() {
  }
}
