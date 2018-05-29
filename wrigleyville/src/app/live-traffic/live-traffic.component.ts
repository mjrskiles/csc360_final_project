import { Component, OnInit } from '@angular/core';
import { GameInfo } from '../GameInfo';

import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-live-traffic',
  templateUrl: './live-traffic.component.html',
  styleUrls: ['./live-traffic.component.css']
})
export class LiveTrafficComponent implements OnInit {

  // Temporary example game
  game: GameInfo = {
    "date": "05/27/18",
    "time": "07:08 PM",
    "description": "Giants at Cubs",
    "isHomeGame": true
  }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  private daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  onClickCollapse(event: any) {
    let parent = event.target;
    let content = parent.nextElementSibling;

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  getDayOfWeekFrom(date: string): string {
    let day = new Date(date);
    return this.daysOfWeek[day.getDay()];
  }

}
