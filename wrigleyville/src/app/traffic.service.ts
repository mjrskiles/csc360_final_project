import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { trafficResponse } from './trafficResponse';
import 'rxjs/add/operator/map'


@Injectable()
export class traffic_service {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<trafficResponse> {
    const requestUrl = '/trafficproxy/traffic/6.2/flow.json?app_id=0iwAZVrfB4ivbkFfVinQ&app_code=mM3LR3ZQ5XleuGDJXYXI1A&bbox=41.951,-87.659;41.944,-87.649'
    return this.http.get<trafficResponse>(requestUrl)
  }

}