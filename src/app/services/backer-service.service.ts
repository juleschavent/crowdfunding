import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackerServiceService {

  public isOpen = false;

  public openBackModal() {
    window.scrollTo(0 , 0)
    this.isOpen = !this.isOpen;
  }

  constructor() { }
}
