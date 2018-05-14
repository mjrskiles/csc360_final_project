import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { GameScheduleComponent } from './game-schedule/game-schedule.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { GameScheduleService } from './game-schedule.service';
import { RedLineTrackerService } from './red-line-tracker.service';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    GameScheduleComponent,
    NavbarComponent,
    MapComponent,
    ContentViewComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    GameScheduleService,
    RedLineTrackerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
