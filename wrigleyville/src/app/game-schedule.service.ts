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
    const today = this.getFormattedDateString(new Date());
    this.games = db.list('cubs-games', ref => ref.orderByChild("date").startAt(today)).valueChanges();
  }

  getSchedule(): Observable<any[]> {
    return this.games;
  }

  // The dates in our database are formatted as 'MM/DD/YY'
  getFormattedDateString(date: Date): string {
    let month = (date.getMonth() + 1).toString(); //Months start at 0
    month = month.length == 1 ? '0' + month : month; // Add a padding 0 if necessary
    let day = date.getDate().toString();
    day = day.length == 1 ? '0' + day : day;
    let year = date.getFullYear().toString();
    year = year.slice(2);
    const todayStr = `${month}/${day}/${year}`;
    // console.log(`todayStr is ${todayStr}`);
    return todayStr;
  }
}
