import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../GameInfo';
import { GameScheduleService } from '../game-schedule.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-live-traffic',
  templateUrl: './live-traffic.component.html',
  styleUrls: ['./live-traffic.component.css']
})
export class LiveTrafficComponent implements OnInit {

  private schedule: Observable<any[]>;
  nextHomeGame: GameInfo;
  gameIsToday: Boolean = false;

  private daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor(private gameScheduleService: GameScheduleService) { }

  ngOnInit() {
    this.getNextHomeGame();
  }

  onClickCollapse(event: any) {
    let parent = event.target;
    let content = parent.nextElementSibling;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  getDayOfWeekFrom(date: string): string {
    let day = new Date(date);
    return this.daysOfWeek[day.getDay()];
  }

  // Get the next home game to display in the info card
  getNextHomeGame() {
    this.gameScheduleService.getSchedule().subscribe( response => {
      for(let game of response) {
        if (game["isHomeGame"]) {
          this.nextHomeGame = game;

          // Check if the game is today
          let gameDate = new Date(game["date"]);
          let today = new Date()
          if (gameDate.getDate == today.getDate) {
            this.gameIsToday = true;
          }
          break;
        }
      }
    });
  }

}
