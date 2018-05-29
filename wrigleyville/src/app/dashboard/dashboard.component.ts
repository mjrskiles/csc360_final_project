
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit 
{
  constructor(public authService: AuthService) { }


  CheckAlarms()
  {
    return this.authService.CheckAlarms();
    // var result = '';
    // if (this.authService.gameAlarm == true) result += 'There is a home game today at: ';
    // //if (this.authService.trafficAlarm == true) result += ' boi';
    
    // alert(result);
    // return result;
  }

  ngOnInit() {
    this.CheckAlarms();
  }

}