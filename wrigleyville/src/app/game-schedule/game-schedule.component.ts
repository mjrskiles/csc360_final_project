import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { GameScheduleService } from '../game-schedule.service';
import { GameInfo } from '../GameInfo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-game-schedule',
  templateUrl: './game-schedule.component.html',
  styleUrls: ['./game-schedule.component.css']
})


export class GameScheduleComponent implements OnInit {

  private schedule: Observable<any[]>;

  constructor(private gameScheduleService: GameScheduleService) { }

  ngOnInit() {
    this.getSchedule();
  }

  // Get the schedule as an observable. We subscribe to the observable in the template
  // using the async pipe. Observables from the firebase real time DB will emit any time
  // the data is updated, so it would be possible get real time schedule updates.
  getSchedule() {
    this.schedule = this.gameScheduleService.getSchedule();
  }
}
