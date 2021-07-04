import { Component, OnInit } from '@angular/core';
import { BackerServiceService } from 'src/app/services/backer-service.service';
import { PledgeService } from 'src/app/services/pledge.service';

@Component({
  selector: 'app-black-pledge',
  templateUrl: './black-pledge.component.html',
  styleUrls: ['./black-pledge.component.scss']
})
export class BlackPledgeComponent implements OnInit {

  constructor(public settings: PledgeService, public settingsBacker: BackerServiceService) { }

  ngOnInit(): void {
  }

}
