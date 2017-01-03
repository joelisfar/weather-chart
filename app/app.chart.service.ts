// Service for fetching/mapping json files

import { Injectable } from '@angular/core';
import { Http } from  '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable() export class AppChartService {
  _data: any;
	constructor(private http:Http) { };

  public getChartData(url:string) : Observable<string> {
  return this.http.get(url).map(
    (res:any) => { return res.json().result; }
  ).catch(
    (error:any) => Observable.throw(
      console.log(error.json().error))
    )
  };
}
