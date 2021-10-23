import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements  OnInit{
  constructor(private translateService: TranslateService) {
    this.translateService.use('en-US');
  }

  ngOnInit(): void {
  }
}
