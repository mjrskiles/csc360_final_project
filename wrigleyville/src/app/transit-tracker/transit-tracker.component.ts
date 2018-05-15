import { Component, OnInit } from '@angular/core';
import { RedLineTrackerService } from '../red-line-tracker.service';
import { TrainETA } from '../TrainETA';

@Component({
  selector: 'app-transit-tracker',
  templateUrl: './transit-tracker.component.html',
  styleUrls: ['./transit-tracker.component.css']
})
export class TransitTrackerComponent implements OnInit {

  arrivals: TrainETA[] = [
    {
      destination: '95th/Dan Ryan',
      arrivalTime: '4 min'
    },
    {
      destination: 'Howard',
      arrivalTime: '6 min'
    },
    {
      destination: 'Howard',
      arrivalTime: '10 min'
    },
    {
      destination: '95th/Dan Ryan',
      arrivalTime: '12 min'
    }
  ]

  constructor(
    private redLineTrackerService: RedLineTrackerService
  ) { }

  ngOnInit() {}

}
