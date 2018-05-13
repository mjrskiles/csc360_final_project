import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

@Injectable()
export class GameScheduleService {

  private games = [
    "Game 1: 5/1/18 6:00 PM",
    "Game 2: 5/2/18 5:30 PM",
    "Game 3: 5/5/18 2:30 PM @ Mets",
    "Game 4: 5/7/18 4:00 PM @ Mets",
    "Game 5: 5/11/18 6:00 PM @ Angels"
  ]

  constructor() { }

  getSchedule(): Observable<string[]> {
    return from([this.games]);
  }
}
