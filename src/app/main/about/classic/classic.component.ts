import { Component, OnInit } from '@angular/core';
import { PledgeService } from 'src/app/services/pledge.service';
import { BackerServiceService } from '../../../services/backer-service.service'

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit {

  constructor(public settingsBacker: BackerServiceService, public settings: PledgeService) { }

  ngOnInit(): void {
  }

}
