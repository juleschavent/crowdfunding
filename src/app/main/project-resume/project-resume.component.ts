import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-resume',
  templateUrl: './project-resume.component.html',
  styleUrls: ['./project-resume.component.scss']
})
export class ProjectResumeComponent implements OnInit {

  isBookmarked = false;
  isBookmarkedMob = false;


  bookmark(){
    this.isBookmarked = !this.isBookmarked;
  }
  
  bookmarkMob(){
    this.isBookmarkedMob = !this.isBookmarkedMob;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
