import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { GameScheduleComponent } from './game-schedule/game-schedule.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { GameScheduleService } from './game-schedule.service';



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
  ],
  providers: [GameScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
