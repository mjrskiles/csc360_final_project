import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http, Response } from '@angular/http';
import { traffic_service } from '../traffic.service';
import { trafficResponse } from '../trafficResponse';

@Component({
  selector: 'app-traffic-congestion',
  templateUrl: './traffic-congestion.component.html',
  styleUrls: ['./traffic-congestion.component.css']
})
export class TrafficCongestionComponent implements OnInit{
  requestUrl = '/trafficproxy/traffic/6.2/flow.json?app_id=0iwAZVrfB4ivbkFfVinQ&app_code=mM3LR3ZQ5XleuGDJXYXI1A&bbox=41.951,-87.659;41.944,-87.649';
  speeds : trafficResponse;

  constructor(private _tracker_service : traffic_service) {}

  ngOnInit() {
    this.getData();
  }

  getData(){
    this._tracker_service.getData().subscribe(
      response => {this.speeds = response}, 
      err => console.log(err),
      () => console.log(this.speeds)
    );
  }

  formatData(){
    console.log(this.speeds)
    //let node0_0 = this.speeds["RWS"][0]["RW"][0]["FIS"][0]["FI"][0]["CF"][0]["SP"];
    /*
		let node0_1 = this.speeds["RWS"][0]["RW"][0]["FIS"][0]["FI"][1]["CF"][0]["SP"];
		let node0_2 = this.speeds["RWS"][0]["RW"][0]["FIS"][0]["FI"][2]["CF"][0]["SP"];
		let node1_0 = this.speeds["RWS"][0]["RW"][1]["FIS"][0]["FI"][0]["CF"][0]["SP"];
	  let node1_1 = this.speeds["RWS"][0]["RW"][1]["FIS"][0]["FI"][1]["CF"][0]["SP"];
		let node1_2 = this.speeds["RWS"][0]["RW"][1]["FIS"][0]["FI"][2]["CF"][0]["SP"];
		let node2_0 = this.speeds["RWS"][0]["RW"][2]["FIS"][0]["FI"][0]["CF"][0]["SP"];
		let node3_0 = this.speeds["RWS"][0]["RW"][3]["FIS"][0]["FI"][0]["CF"][0]["SP"];
		let node12_0 = this.speeds["RWS"][0]["RW"][12]["FIS"][0]["FI"][0]["CF"][0]["SP"];
	  let node12_1 = this.speeds["RWS"][0]["RW"][12]["FIS"][0]["FI"][1]["CF"][0]["SP"];
		let node13_1 = this.speeds["RWS"][0]["RW"][13]["FIS"][0]["FI"][1]["CF"][0]["SP"];
    let node13_2 = this.speeds["RWS"][0]["RW"][13]["FIS"][0]["FI"][2]["CF"][0]["SP"];
    let node14_1 = this.speeds["RWS"][0]["RW"][14]["FIS"][0]["FI"][1]["CF"][0]["SP"];
    */
    
    let test = "Please Work"
    return (test) 
  }
  

    //console.log(this.data)
    /*
    let node0_0 = this.data["RWS"][0]["RW"][0]["FIS"][0]["FI"][0]["CF"][0]["SP"];
		let node0_1 = this.data["RWS"][0]["RW"][0]["FIS"][0]["FI"][1]["CF"][0]["SP"];
		let node0_2 = this.data["RWS"][0]["RW"][0]["FIS"][0]["FI"][2]["CF"][0]["SP"];
		let node1_0 = this.data["RWS"][0]["RW"][1]["FIS"][0]["FI"][0]["CF"][0]["SP"];
	  let node1_1 = this.data["RWS"][0]["RW"][1]["FIS"][0]["FI"][1]["CF"][0]["SP"];
		let node1_2 = this.data["RWS"][0]["RW"][1]["FIS"][0]["FI"][2]["CF"][0]["SP"];
		let node2_0 = this.data["RWS"][0]["RW"][2]["FIS"][0]["FI"][0]["CF"][0]["SP"];
		let node3_0 = this.data["RWS"][0]["RW"][3]["FIS"][0]["FI"][0]["CF"][0]["SP"];
		let node12_0 = this.data["RWS"][0]["RW"][12]["FIS"][0]["FI"][0]["CF"][0]["SP"];
	  let node12_1 = this.data["RWS"][0]["RW"][12]["FIS"][0]["FI"][1]["CF"][0]["SP"];
		let node13_1 = this.data["RWS"][0]["RW"][13]["FIS"][0]["FI"][1]["CF"][0]["SP"];
    let node13_2 = this.data["RWS"][0]["RW"][13]["FIS"][0]["FI"][2]["CF"][0]["SP"];
    let node14_1 = this.data["RWS"][0]["RW"][14]["FIS"][0]["FI"][1]["CF"][0]["SP"];
    this.list = [node0_0,node0_1,node0_2,node1_0,node1_1,node1_2,node2_0,node3_0,node12_0,node12_1,node13_1,node13_2,node14_1];
    */

}
