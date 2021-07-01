import { Component, OnInit } from '@angular/core';
import { BackerServiceService } from '../services/backer-service.service'

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(public settings: BackerServiceService) { }

  ngOnInit(): void {
  }

}
