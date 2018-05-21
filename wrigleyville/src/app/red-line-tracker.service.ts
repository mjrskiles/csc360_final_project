import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TrainTrackerResponse } from './TrainTrackerResponse';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

/*
  To get this API to work properly I had to set up a proxy redirect for the train tracker API.
  The reason for doing this is because of a CORS error when trying to access the CTA API from 
  the browser. The proxy is set up in the proxy.conf.json file.

  This is obviously not a good permanent solution. The correct solution is probably to write
  the CTA API calls as a backend service. But we do not have a backend set up right now.

  See the following links for more info:
  https://stackoverflow.com/questions/37172928/angular-cli-server-how-to-proxy-api-requests-to-another-server
  https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/
*/

@Injectable()
export class RedLineTrackerService {

// Sample request: http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=221cf8612b8943edaca50ed47826e424&mapid=41420&max=4&outputType=JSON

  private trainsUrl = '/ctattproxy/api/1.0/ttarrivals.aspx';
  // private trainsUrl = 'http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx'
  private apiKey = '221cf8612b8943edaca50ed47826e424'
  private mapID = '41420' //The map_id of the Addison red line station
  private numToFetch = 4;

  lastResponse: TrainTrackerResponse
  lastRequest: string

  constructor(
    private http: HttpClient
  ) { }

  getNextArrivals(): Observable<TrainTrackerResponse> {
    const requestUrl = `${this.trainsUrl}?key=${this.apiKey}&mapid=${this.mapID}&max=${this.numToFetch}&outputType=JSON`;
    // const requestUrl = this.trainsUrl + "?key=" + this.apiKey + "&mapid=" + this.mapID + "&max=" + this.numToFetch;
    this.lastRequest = requestUrl
    return this.http.get<TrainTrackerResponse>(requestUrl).pipe(
      tap(_ => console.log('Successfully fetched Red line arrivals from CTA.')),
      catchError(this.handleError('Fetching CTA Arrivals')));
  }

  getLastResonse(): TrainTrackerResponse {
    return this.lastResponse;
  }

  getLastRequest(): string {
    return this.lastRequest
  }

  private handleError(operation = 'CTA TT operation', result?: TrainTrackerResponse) {
    return (error: any): Observable<TrainTrackerResponse> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }

}
