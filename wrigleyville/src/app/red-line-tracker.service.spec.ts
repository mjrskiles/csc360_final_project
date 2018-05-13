import { TestBed, inject } from '@angular/core/testing';

import { RedLineTrackerService } from './red-line-tracker.service';

describe('RedLineTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedLineTrackerService]
    });
  });

  it('should be created', inject([RedLineTrackerService], (service: RedLineTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
