import { TestBed, inject } from '@angular/core/testing';

import { GameScheduleService } from './game-schedule.service';

describe('GameScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameScheduleService]
    });
  });

  it('should be created', inject([GameScheduleService], (service: GameScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
