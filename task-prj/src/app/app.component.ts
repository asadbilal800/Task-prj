import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LANG} from "../common/globals";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements  OnInit{
  constructor(private translateService: TranslateService) {
    this.translateService.use(LANG[0]);
  }

  ngOnInit(): void {
  }
}
