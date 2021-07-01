import { Component, OnInit } from '@angular/core';
import { BackerServiceService } from '../../../services/backer-service.service'

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent implements OnInit {

  constructor(public settings: BackerServiceService) { }

  ngOnInit(): void {
  }

}
