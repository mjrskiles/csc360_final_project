import { Component, OnInit } from '@angular/core';
import { RedLineTrackerService } from '../red-line-tracker.service';
import { TrainTrackerResponse } from '../TrainTrackerResponse';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

  redLineArrivals: string
  request: string

  constructor(private redLineTrackerService: RedLineTrackerService) { }

  ngOnInit() {
    this.redLineTrackerService.getNextArrivals().subscribe(response => this.redLineArrivals = response.json());
    this.request = this.redLineTrackerService.getLastRequest()
  }

  private _opened: boolean = true;
  private _position: string = 'right';
  private _showBackdrop: boolean = false;
  private _sidebarClass: string = 'schedule-sidebar';
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
