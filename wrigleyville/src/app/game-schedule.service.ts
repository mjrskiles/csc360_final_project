import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { GameInfo } from './GameInfo';
import { games } from './games';

@Injectable()
export class GameScheduleService {
  private games = games;

  constructor() { }

  getSchedule(): Observable<GameInfo[]> {
    return from([this.games]);
  }
}
