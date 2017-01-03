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
var WeatherDataComponent = (function () {
    function WeatherDataComponent() {
        this.weatherRecords = [
            { "temperature": 80, "date": 20 },
            { "temperature": 85, "date": 21 },
            { "temperature": 84, "date": 22 },
            { "temperature": 78, "date": 23 },
        ];
    }
    WeatherDataComponent = __decorate([
        core_1.Component({
            selector: 'weather-data',
            template: "\n  <ul style=\"display: inline-block; text-align: left;\">\n    <li *ngFor=\"let weatherRecord of weatherRecords\">\n        <strong>{{weatherRecord.date}}</strong> {{weatherRecord.temperature}}\n    </li>\n  </ul>\n\n  <br><br>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], WeatherDataComponent);
    return WeatherDataComponent;
}());
exports.WeatherDataComponent = WeatherDataComponent;
//# sourceMappingURL=data.component.js.map