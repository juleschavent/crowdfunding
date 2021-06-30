import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BurgerComponent } from './header/burger/burger.component';
import { ProjectResumeComponent } from './main/project-resume/project-resume.component';
import { ProgressComponent } from './main/progress/progress.component';
import { ProgressBarComponent } from './main/progress/progress-bar/progress-bar.component';
import { AboutComponent } from './main/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerComponent,
    ProjectResumeComponent,
    ProgressComponent,
    ProgressBarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
