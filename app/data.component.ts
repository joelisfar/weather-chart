import { Component } from '@angular/core';

@Component({
  selector: 'weather-data',
  template: `
  <ul style="display: inline-block; text-align: left;">
    <li *ngFor="let weatherRecord of weatherRecords">
        <strong>{{weatherRecord.date}}</strong> {{weatherRecord.temperature}}
    </li>
  </ul>

  <br><br>
  `
})
export class WeatherDataComponent {
  weatherRecords = [
    { "temperature": 80, "date": 20 },
    { "temperature": 85, "date": 21 },
    { "temperature": 84, "date": 22 },
    { "temperature": 78, "date": 23 },
];
}
