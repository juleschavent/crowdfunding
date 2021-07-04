import { Component, OnInit } from '@angular/core';
import { BackerServiceService } from 'src/app/services/backer-service.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  constructor(public settingsBacker: BackerServiceService) { }

  ngOnInit(): void {
  }

}
