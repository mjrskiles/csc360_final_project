import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TrainTrackerResponse } from './TrainTrackerResponse';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class RedLineTrackerService {

// Sample request: http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=a8456dcbhf8475683cf7818bca81&mapid=40380&max=5

  private trainsUrl = 'http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx';
  private apiKey = '221cf8612b8943edaca50ed47826e424'
  private mapID = '41420' //The map_id of the Addison red line station
  private numToFetch = 4;

  lastResponse: TrainTrackerResponse
  lastRequest: string

  constructor(
    private http: Http
  ) { }

  getNextArrivals(): Observable<Response> {
    const requestUrl = `${this.trainsUrl}?key=${this.apiKey}&mapid=${this.mapID}&max=${this.numToFetch}&outputType=JSON`;
    // const requestUrl = this.trainsUrl + "?key=" + this.apiKey + "&mapid=" + this.mapID + "&max=" + this.numToFetch;
    this.lastRequest = requestUrl
    return this.http.get(requestUrl);
  }

  extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  getLastResonse(): TrainTrackerResponse {
    return this.lastResponse;
  }

  getLastRequest(): string {
    return this.lastRequest
  }

}
