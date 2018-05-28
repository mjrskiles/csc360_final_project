import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _opened: boolean = false;
  private _position: string = 'right';
  private _showBackdrop: boolean = true;
  private _sidebarClass: string = 'schedule-sidebar';
  private _closeOnClickOutside: boolean = true
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
