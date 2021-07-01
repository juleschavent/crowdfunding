import { Component, OnInit } from '@angular/core';
import { PledgeService } from 'src/app/services/pledge.service';

@Component({
  selector: 'app-simple-pledge',
  templateUrl: './simple-pledge.component.html',
  styleUrls: ['./simple-pledge.component.scss']
})
export class SimplePledgeComponent implements OnInit {

  constructor(public settings: PledgeService ) { }

  ngOnInit(): void {
  }

}
