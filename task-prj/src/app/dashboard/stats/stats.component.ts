import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

   seriesData: number[] = [1,3,5,6,5,3,5,7,8,55];


  constructor() {
  }


  ngOnInit(): void {
  }

}
