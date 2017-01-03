// Headings and chart data fetching + chart options, should move chart to separate component

import { Component } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppChartService } from './app.chart.service';
declare var moment: any;

@Component({
  selector: 'weather-chart-app',
  templateUrl: `/app/app.component.html`
})
export class AppComponent {
  // Headings
  name = 'Weather Chart';
  description = 'Showing Highs & Lows with Javascript';

  _chartHighData:any = {};
  _chartLowData:any = {};

  // Prevent chart from loading before data has been fetched
  isHighDataFetched:boolean = false;
  isLowDataFetched:boolean = false;
  isRenderChart:boolean = false;

  public lineChartData:Array<any>= [];
  public lineChartLabels:Array<any>=[];

  constructor(chartDataService: AppChartService) {
    this.getHighChartData(chartDataService);
    this.getLowChartData(chartDataService);
  }

  // Get high temp data and dates
  private getHighChartData( chartDataService:any) {
    chartDataService.getChartData('./app/temp_data_high.json').subscribe((chartData:any) => {
      this._chartHighData = chartData;
      let helperDataArray:Array<any> = [];

      this._chartHighData.site.weather.filter((x:any) => {
        helperDataArray.push(x.high_temp)
      });

      this.lineChartData.push({
        data:helperDataArray,
        label:'High'
      });

      // Empty array to use for x-axis dates, also coming from temp_data_high.json
      helperDataArray = [];

      this._chartHighData.site.weather.filter((x:any) => {
        let formatedDate = moment(x.date).format('MMM D');
        helperDataArray.push(formatedDate);
      });

      this.lineChartLabels = helperDataArray;

      this.isHighDataFetched = true;
      this.isDataFetchFinished()
    })
  }

  // Get low temp data
  private getLowChartData(chartDataService:any){
    chartDataService.getChartData('./app/temp_data_low.json').subscribe((chartData:any) => {
      this._chartLowData = chartData;
      let helperDataArray:Array<any> = [];

      this._chartLowData.site.weather.filter((x:any) => {
        helperDataArray.push(x.low_temp)
      });

      this.lineChartData.push({
        data: helperDataArray,
        label:'Low'
      });

      this.isLowDataFetched = true;
      this.isDataFetchFinished();
    })
  }

  // When both are fetched it’s ready
  private isDataFetchFinished(){
    if(this.isLowDataFetched && this.isHighDataFetched) {
      this.isRenderChart = true;
    }
  }

  // Chart.js display options
  public lineChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false
  };

  public lineChartColors:Array<any> = [
    { // red
      backgroundColor: 'rgba(217, 51, 68, 0.0625)',
      borderColor: 'rgba(217, 51, 68, 1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // teal
      backgroundColor: 'rgba(83, 219, 208, 0.140625)',
      borderColor: 'rgba(83, 219, 208, 1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

}
