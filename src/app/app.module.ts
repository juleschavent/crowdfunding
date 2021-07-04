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
import { ClassicComponent } from './main/about/classic/classic.component';
import { BlackComponent } from './main/about/black/black.component';
import { MahoganyComponent } from './main/about/mahogany/mahogany.component';
import { ThanksComponent } from './modals/thanks/thanks.component';
import { ModalsComponent } from './modals/modals.component';
import { SimplePledgeComponent } from './modals/simple-pledge/simple-pledge.component';
import { BlackPledgeComponent } from './modals/black-pledge/black-pledge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerComponent,
    ProjectResumeComponent,
    ProgressComponent,
    ProgressBarComponent,
    AboutComponent,
    ClassicComponent,
    BlackComponent,
    MahoganyComponent,
    ThanksComponent,
    ModalsComponent,
    SimplePledgeComponent,
    BlackPledgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
