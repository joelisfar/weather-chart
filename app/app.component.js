// Headings and chart data fetching + chart options, should move chart to separate component
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_chart_service_1 = require('./app.chart.service');
var AppComponent = (function () {
    function AppComponent(chartDataService) {
        // Headings
        this.name = 'Weather Chart';
        this.description = 'Showing Highs & Lows with Javascript';
        this._chartHighData = {};
        this._chartLowData = {};
        // Prevent chart from loading before data has been fetched
        this.isHighDataFetched = false;
        this.isLowDataFetched = false;
        this.isRenderChart = false;
        this.lineChartData = [];
        this.lineChartLabels = [];
        // Chart.js display options
        this.lineChartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(217, 51, 68, 0.0625)',
                borderColor: 'rgba(217, 51, 68, 1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(83, 219, 208, 0.140625)',
                borderColor: 'rgba(83, 219, 208, 1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.getHighChartData(chartDataService);
        this.getLowChartData(chartDataService);
    }
    // Get high temp data and dates
    AppComponent.prototype.getHighChartData = function (chartDataService) {
        var _this = this;
        chartDataService.getChartData('./app/temp_data_high.json').subscribe(function (chartData) {
            _this._chartHighData = chartData;
            var helperDataArray = [];
            _this._chartHighData.site.weather.filter(function (x) {
                helperDataArray.push(x.high_temp);
            });
            _this.lineChartData.push({
                data: helperDataArray,
                label: 'High'
            });
            // Empty array to use for x-axis dates, also coming from temp_data_high.json
            helperDataArray = [];
            _this._chartHighData.site.weather.filter(function (x) {
                var formatedDate = moment(x.date).format('MMM D');
                helperDataArray.push(formatedDate);
            });
            _this.lineChartLabels = helperDataArray;
            _this.isHighDataFetched = true;
            _this.isDataFetchFinished();
        });
    };
    // Get low temp data
    AppComponent.prototype.getLowChartData = function (chartDataService) {
        var _this = this;
        chartDataService.getChartData('./app/temp_data_low.json').subscribe(function (chartData) {
            _this._chartLowData = chartData;
            var helperDataArray = [];
            _this._chartLowData.site.weather.filter(function (x) {
                helperDataArray.push(x.low_temp);
            });
            _this.lineChartData.push({
                data: helperDataArray,
                label: 'Low'
            });
            _this.isLowDataFetched = true;
            _this.isDataFetchFinished();
        });
    };
    // When both are fetched it’s ready
    AppComponent.prototype.isDataFetchFinished = function () {
        if (this.isLowDataFetched && this.isHighDataFetched) {
            this.isRenderChart = true;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'weather-chart-app',
            templateUrl: "/app/app.component.html"
        }), 
        __metadata('design:paramtypes', [app_chart_service_1.AppChartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map