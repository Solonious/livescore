import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Countries } from './shared/countries';
import { Leagues } from './shared/leagues';

@Injectable()
export class AppService {
  apiFootbal = 'https://apifootball.com/api/?action=';
  APIkey = '';
  leagues: Leagues[];
  constructor(private http: Http) { }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
  getCountries(): Observable<Countries[]> {
    return this.http.get(`${this.apiFootbal}get_countries&${this.APIkey}`)
        .map(res => res.json() as Countries[])
        .catch(this.handleError);
  }
}
