import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../GameInfo';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css']
})
export class ContentViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // ng-sidebar settings
  private _opened: boolean = false;
  private _position: string = 'right';
  private _showBackdrop: boolean = true;
  private _sidebarClass: string = 'schedule-sidebar';
  private _closeOnClickOutside: boolean = true
  private _autoFocusFirstElement: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
