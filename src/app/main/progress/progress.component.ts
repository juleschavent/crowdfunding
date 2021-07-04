import { Component, OnInit } from '@angular/core';
import { PledgeService } from 'src/app/services/pledge.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {


  constructor(public settings: PledgeService) { }

  ngOnInit(): void {
  }

}
