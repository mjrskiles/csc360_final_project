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
import { TrendsComponent } from './trends/trends.component';
import { AppRoutingModule } from './/app-routing.module';
import { LiveTrafficComponent } from './live-traffic/live-traffic.component';
import { TransitTrackerComponent } from './transit-tracker/transit-tracker.component';



@NgModule({
  declarations: [
    AppComponent,
    GameScheduleComponent,
    NavbarComponent,
    MapComponent,
    ContentViewComponent,
    TrendsComponent,
    LiveTrafficComponent,
    TransitTrackerComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    GameScheduleService,
    RedLineTrackerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
