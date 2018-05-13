import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { GameScheduleService } from '../game-schedule.service';

@Component({
  selector: 'app-game-schedule',
  templateUrl: './game-schedule.component.html',
  styleUrls: ['./game-schedule.component.css']
})
export class GameScheduleComponent implements OnInit {

  private schedule: String

  constructor(private gameScheduleService: GameScheduleService) { }

  ngOnInit() {
  }

  getSchedule() {
    this.gameScheduleService.getSchedule().subscribe(schedule => this.schedule = schedule);
  }
}
