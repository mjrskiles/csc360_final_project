import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-traffic',
  templateUrl: './live-traffic.component.html',
  styleUrls: ['./live-traffic.component.css']
})
export class LiveTrafficComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

}
