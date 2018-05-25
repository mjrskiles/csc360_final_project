import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { GameInfo } from './GameInfo';
// import { games } from './games';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class GameScheduleService {
  private games: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    // Fetches cubs schedule as a list of games from our Firebase RTDB
    // https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md for more info.
    this.games = db.list('cubs-games').valueChanges();
  }

  getSchedule(): Observable<any[]> {
    return this.games;
  }
}
