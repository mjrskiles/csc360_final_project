import { TestBed, inject } from '@angular/core/testing';

import { traffic_service } from './traffic.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TrainTrackerResponse } from './TrainTrackerResponse';

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

let httpClientSpy: { get: jasmine.Spy };
let Service: traffic_service;

beforeEach(() => { 
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  Service = new traffic_service(<any> httpClientSpy); 
});

it('should return expected heroes (HttpClient called once)', () => {
  const expectedData: TrainTrackerResponse[] =[];
    
  Service.getData().subscribe(
    data => expect(data).toEqual(expectedData, 'expected data'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
  
it('should return an error when the server returns a 404', () => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });
  
  Service.getData().subscribe(
    heroes => fail('expected an error, not trafficData'),
    error  => expect(error.message).toContain('test 404 error')
  );
});
