import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PledgeService {

  public isSimple = false;

  pledgeChoice(){
    this.isSimple = !this.isSimple
  }

  constructor() { }
}
