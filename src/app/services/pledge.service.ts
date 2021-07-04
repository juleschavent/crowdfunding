import { Injectable } from '@angular/core';
import { BackerServiceService } from './backer-service.service';

@Injectable({
  providedIn: 'root'
})
export class PledgeService {

  //CURRENT VARIABLES (money, backers, days left, pledge left)
  currMoney = 69000;
  currBackers = 5007;
  currDays = 56;
  currSimplePledge = 101;
  currBlackPledge = 64;

  isSimpleUnvalid = false;
  isBlackUnvalid = false;

  // Update current variables
  addPledgeSimple() {
    this.isSimpleUnvalid = false;
    let input = <HTMLInputElement>document.querySelector('#inputPledge');
    if (input.value === "") {
      this.isSimpleUnvalid = true;
    } else {
      this.currMoney += parseInt(input.value);
      this.currBackers += 1;
      this.currSimplePledge -= 1;
      this.settingsBacker.isBackerOpen = false;
      this.isSimple = false;
      this.settingsBacker.openThanksModal();
    }
  }

  addPledgeBlack() {
    this.isBlackUnvalid = false;
    let input = <HTMLInputElement>document.querySelector('#inputPledge');
    if (input.value === "") {
      this.isBlackUnvalid = true;
    } else {
      this.currMoney += parseInt(input.value);
      this.currBackers += 1;
      this.currBlackPledge -= 1;
      this.settingsBacker.isBackerOpen = false;
      this.isBlack = false;
      this.settingsBacker.openThanksModal();
    }
  }

  //SIMPLE PLEDGE (BAMBOO STAND)
  public isSimple = false;
  pledgeSimple() {
    this.isSimple = !this.isSimple
    this.isBlack = false;
  }

  //BLACK PLEDGE
  public isBlack = false;
  pledgeBlack() {
    this.isBlack = !this.isBlack
    this.isSimple = false;
  }

  //MAHOGANY PLEDGE


  constructor(public settingsBacker: BackerServiceService) { }
}
