import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { GameInfo } from './GameInfo';

@Injectable()
export class GameScheduleService {

  private games = [
    {
      date: "5/1/18",
      time: "6:00 PM",
      opponent: "Cardinals",
      isHomeGame: true
    },
    {
      date: "5/2/18",
      time: "5:30 PM",
      opponent: "Cardinals",
      isHomeGame: true
    },
    {
      date: "5/5/18",
      time: "2:30 PM",
      opponent: "Mets",
      isHomeGame: false
    },
    {
      date: "5/7/18",
      time: "6:00 PM",
      opponent: "Mets",
      isHomeGame: true
    },
    {
      date: "5/10/18",
      time: "6:00 PM",
      opponent: "White Sox",
      isHomeGame: true
    }
  ]

  constructor() { }

  getSchedule(): Observable<GameInfo[]> {
    return from([this.games]);
  }
}
