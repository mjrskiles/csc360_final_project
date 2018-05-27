import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import {var1} from '../traffic-data/ACN/May25ACN'

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  
  pieChartData =  {
    chartType: 'Line',
    dataTable: this.getData(),
    options: {'title': 'Tasks'},
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  getData(){
    return var1;
  }
}

/*
 data.addColumn('AHS', 'Addison/Halstead South');
      data.addColumn('ACN', 'Addison/Clark North');
      data.addColumn('ACS', 'Addison/Clark South');
      data.addColumn('ARN', 'Addison/Racine East');
      data.addColumn('ARS', 'Addison/Racine West');
      data.addColumn('CAN', 'Clark/Addison North');
      data.addColumn('CAS', 'Clark/Addision South');
      data.addColumn('SCN', 'Sheffield/Clark North');
      data.addColumn('SCS', 'Sheffield/Clark South');
      data.addColumn('SAN', 'Sheffield/Addision North');
      data.addColumn('SAS', 'Sheffield/Addison South');
      data.addColumn('RS',  'Rosco/Sheffield North');
*/
