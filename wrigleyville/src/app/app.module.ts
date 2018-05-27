import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { SidebarModule } from 'ng-sidebar';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import {firebase} from '@firebase/app'
import { environment } from '../environments/environment';


// Components
import { AppComponent } from './app.component';
import { GameScheduleComponent } from './game-schedule/game-schedule.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { TrendsComponent } from './trends/trends.component';
import { LiveTrafficComponent } from './live-traffic/live-traffic.component';
import { TransitTrackerComponent } from './transit-tracker/transit-tracker.component';
import { TrafficCongestionComponent } from './traffic-congestion/traffic-congestion.component';
import { traffic_service } from './traffic.service';

// Services
import { GameScheduleService } from './game-schedule.service';
import { RedLineTrackerService } from './red-line-tracker.service';
import { AuthService } from './services/auth.service';

// Pipes
import { ArrivalTimePipe } from './arrival-time.pipe';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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

    TrafficCongestionComponent,

    ArrivalTimePipe,

    LoginComponent,

    EmailComponent,

    SignupComponent,

    MembersComponent,

    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    SidebarModule.forRoot(),
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 
      'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
  ],
  providers: [
    traffic_service,
    GameScheduleService,
    RedLineTrackerService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
