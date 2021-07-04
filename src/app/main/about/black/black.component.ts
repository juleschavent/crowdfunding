import { Component, OnInit } from '@angular/core';
import { PledgeService } from 'src/app/services/pledge.service';
import { BackerServiceService } from '../../../services/backer-service.service'

@Component({
  selector: 'app-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.scss']
})
export class BlackComponent implements OnInit {

  constructor(public settingsBacker: BackerServiceService, public settings: PledgeService) { }

  ngOnInit(): void {
  }

}
