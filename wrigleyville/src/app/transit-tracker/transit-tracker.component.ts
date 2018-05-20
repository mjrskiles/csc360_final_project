import { Component, OnInit } from '@angular/core';
import { RedLineTrackerService } from '../red-line-tracker.service';
import { TrainETA } from '../TrainETA';
import { TrainTrackerResponse } from '../TrainTrackerResponse';

@Component({
  selector: 'app-transit-tracker',
  templateUrl: './transit-tracker.component.html',
  styleUrls: ['./transit-tracker.component.css']
})
export class TransitTrackerComponent implements OnInit {

  private ttResponse: TrainTrackerResponse;
  arrivals: TrainETA[];

  constructor(
    private redLineTrackerService: RedLineTrackerService
  ) { }

  ngOnInit() {}

  getRedlineArrivals() {
    this.redLineTrackerService.getNextArrivals().subscribe(response => {
      console.log("Received a Train Tracker response.");
      console.log(JSON.stringify(response));

      // Strip out only the information we need and save it
      const arrivals = response["ctatt"] ? response["ctatt"]["eta"] : [];
      this.arrivals = arrivals;
    });
  }

}
