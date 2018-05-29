import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import {SCS25, SCN25, SAS25, SAN25, RS25, CAS25, CAN25, ARS25, ARN25, AHS25, AHN25, ACS25, ACN25} from '../traffic-data/May25/data'
import {SCS26, SCN26, SAS26, SAN26, RS26, CAS26, CAN26, ARS26, ARN26, AHS26, AHN26, ACS26, ACN26} from '../traffic-data/May26/data'
import * as angular from "angular";

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  x:any = []
  temp = []

  public pieChartData:any =  {
    chartType: 'LineChart',
    dataTable: [],
    options: {'title': 'Daily Traffic'}
  };

  constructor(private http: Http) { }

  ngOnInit() {
    this.LoadData("25","AH","N")
  }

  LoadData(this, day, street, direction){
    var first:any = ['Time','Speed']
    var d:string = day
    var s:string = street
    var dir:string = direction    
    switch(d){
      case "25": 
        switch(dir){
          case "N": 
            switch(s){
              case "AH":
                this.x = AHN25
                console.log("case 1")
                this.x[0] = first
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                }; 
                break;
              case "AC": 
                this.x = ACN25
                console.log("case 2")
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                };
                break;
              case "AR": 
                this.x = ARN25
                console.log("case 3")
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                }; 
                break;
              case "CA": 
                this.x = CAN25
                console.log("case 4")
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                };
                break; 
              case "SC": 
                this.x = SCN25
                console.log("case 5")
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                };
                break; 
              case "SA": 
                this.x = SAN25
                console.log("case 6")
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                }; 
                break;
              case "RS": 
                this.x = RS25 
                console.log("case 7")
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                };
                break;
              }
              break;
          case "S":
            switch(s){
              case "AH": 
                this.x = AHS25
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                }; 
                break;
              case "AC": 
                this.x = ACS25
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                }; 
                break;
              case "AR": 
                this.x = ARS25
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                };
                break;
              case "CA": 
                this.x = CAS25 
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                };
                break;
              case "SC": 
                this.x = SCS25
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                }; 
                break;
              case "SA": 
                this.x = SAS25
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                }; 
                break;
              case "RS": 
                this.x = RS25 
                this.x[0] = ['Time',"Speed"]
                this.pieChartData =  {
                  chartType: 'LineChart',
                  dataTable: this.x,
                  options: {'title': 'Daily Traffic'}
                };
                break;
            } 
            break;
        }
        break;
        case "26": 
          switch(dir){
            case "N":
              switch(s){
                case "AH": 
                  this.x = AHN26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break;
                case "AC": 
                  this.x = ACN26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break;
                case "AR": 
                  this.x = ARN26
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  }; 
                  break;
                case "CA": 
                  this.x = CAN26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break;
                case "SC": 
                  this.x = SCN26
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  }; 
                  break;
                case "SA": 
                  this.x = SAN26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break;
                case "RS": 
                  this.x = RS26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break;
              }
              break;
            case "S":
              switch(s){
                case "AH": 
                  this.x = AHS26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break;
                case "AC": 
                  this.x = ACS26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break;
                case "AR": 
                  this.x = ARS26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break;
                case "CA": 
                  this.x = CAS26
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  }; 
                  break;
                case "SC": 
                  this.x = SCS26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break;
                case "SA": 
                  this.x = SAS26 
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  };
                  break; 
                case "RS": 
                  this.x = RS26
                  this.x[0] = ['Time',"Speed"]
                  this.pieChartData =  {
                    chartType: 'LineChart',
                    dataTable: this.x,
                    options: {'title': 'Daily Traffic'}
                  }; 
                  break;
              } 
          }
        }
      }
      //this.x[0] = ['Time',"Speed"]
      //this.pieChartData =  {
      //  chartType: 'LineChart',
      //  dataTable: this.x,
      //  options: {'title': 'Daily Traffic'}
      //};

  public refreshData(){
    var day:string = angular.element( document.querySelector( '#d' ) ).val();
    var street:string = angular.element( document.querySelector( '#street' ) ).val();
    var direction:string = angular.element( document.querySelector( '#direction' ) ).val();
    this.LoadData(day,street,direction)
  }
}