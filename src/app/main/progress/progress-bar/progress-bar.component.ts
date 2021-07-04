import { Component, OnInit } from '@angular/core';
import { PledgeService } from 'src/app/services/pledge.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor(public settings: PledgeService) { }

  ngOnInit(): void {
  }

}
