import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';

import { User} from './user'
import { AngularFireDatabase } from 'angularfire2/database';

import { users} from './users'


@Injectable()
export class UserService 
{
  private users = users
  constructor(
    private db: AngularFireDatabase
  ) { }

  getSchedule(): Observable<User[]> {
    return from([this.users]);
  }
}
