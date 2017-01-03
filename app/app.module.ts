import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { AppChartService } from './app.chart.service';
import { AppComponent }    from './app.component';
import { ChartsModule }    from 'ng2-charts/ng2-charts';


@NgModule({
  imports:      [ BrowserModule, HttpModule, ChartsModule ],
  declarations: [ AppComponent ],
  providers: [ AppChartService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
