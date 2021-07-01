import { Component, OnInit } from '@angular/core';
import { BackerServiceService } from '../../../services/backer-service.service'

@Component({
  selector: 'app-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.scss']
})
export class BlackComponent implements OnInit {

  constructor(public settings: BackerServiceService) { }

  ngOnInit(): void {
  }

}
