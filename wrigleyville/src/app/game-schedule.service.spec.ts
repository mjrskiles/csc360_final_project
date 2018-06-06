import { TestBed, inject } from '@angular/core/testing';

import { GameScheduleService } from './game-schedule.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

describe('GameScheduleService', () => {
  let gameScheduleService: GameScheduleService
  let fireDatabaseServiceSpy: jasmine.SpyObj<AngularFireDatabase>;

  beforeEach(() => {
    // Create a mock service for AngularFireDataBase
    const fireDBSpy = jasmine.createSpyObj('fireDBSpy', ['list', 'orderByChild', 'startAt']);
    // need to return an object from list() that has a valueChanges() function, since it gets called in the
    // service constructor
    let fakeList = {
      valueChanges: function() {}
    }
    fireDBSpy.list.and.returnValue(fakeList);

    TestBed.configureTestingModule({
      providers: [GameScheduleService, {provide: AngularFireDatabase, useValue: fireDBSpy}]
    });
    gameScheduleService = TestBed.get(GameScheduleService);
    fireDatabaseServiceSpy = TestBed.get(AngularFireDatabase);


  });

  it('should be created', () => {
    expect(gameScheduleService).toBeTruthy();
  });

  // Should produce a string in format MM/DD/YY
  it('should produce a string in format MM/DD/YY', () => {
    let date = new Date('1990-02-23T12:00:00');
    let str = gameScheduleService.getFormattedDateString(date);
    expect(str.length).toBe(8);
    expect(str[2]).toBe('/');
    expect(str[5]).toBe('/');
    expect(parseInt(str.slice(0,2))).toEqual(jasmine.any(Number));
    expect(parseInt(str.slice(3,5))).toEqual(jasmine.any(Number));
    expect(parseInt(str.slice(6))).toEqual(jasmine.any(Number));
  });
});
