import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackerServiceService {

  public isBackerOpen = false;

  public isThanksOpen = false;

  public openBackModal() {
    window.scrollTo(0, 0)
    this.isBackerOpen = !this.isBackerOpen;
  }

  public openThanksModal() {
    window.scrollTo(0, 0)
    this.isThanksOpen = !this.isThanksOpen;
  }

  constructor() { }
}
