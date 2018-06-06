import { TestBed, inject } from '@angular/core/testing';

import { traffic_service } from './traffic.service';

describe('TrafficService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [traffic_service]
    });
  });

  it('should be created', inject([traffic_service], (service: traffic_service) => {
    expect(service).toBeTruthy();
  }));
});