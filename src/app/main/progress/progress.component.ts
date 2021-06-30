import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  currMoney = 69000;

  currBackers = 5007;

  daysLeft = 56;

  constructor() { }

  ngOnInit(): void {
  }

}
