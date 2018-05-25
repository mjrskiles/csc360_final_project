import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { GameInfo } from './GameInfo';
import { games } from './games';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class GameScheduleService {
  private games = games;

  constructor(
    private db: AngularFireDatabase
  ) { }

  getSchedule(): Observable<GameInfo[]> {
    return from([this.games]);
  }
}
