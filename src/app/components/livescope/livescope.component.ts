import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AppService } from '../../app-service';

import { Countries } from '../../shared/countries';
import { Leagues } from '../../shared/leagues';

@Component({
  selector: 'app-livescope',
  templateUrl: './livescope.component.html',
  styleUrls: ['./livescope.component.css'],
  providers: [AppService]
})
export class LivescopeComponent implements OnInit {
  loading = false;
  countries: Countries[];
  leagues: Leagues[];
  league_id: number;
  dateFrom = new FormControl();
  dateTo = new FormControl();
  country = new FormControl('Select country');
  league = new FormControl('Select league');
  tableDataTabs = [];
  errorTitle: string;
  error: any;
  displayStatus = 0;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getCountries();
    this.country.valueChanges.subscribe(val => {
      this.getLeagues(val);
    }, err => this.error = err);
    this.league.valueChanges.subscribe(val => {
      this.league_id = val;
    });
  }
  getCountries(): void {
    this.loading = true;
    this.appService.getCountries()
    .subscribe(res => {
      this.countries = res;
      this.loading = false;
    }, () => this.loading = false);
  }
  getLeagues(id: any): void {
    this.loading = true;
    this.appService.getLeagues(id)
    .subscribe(res => {
      this.leagues = res;
      console.log(res);
      this.loading = false;
      },
        err => {
      this.error = err; console.log(err);
      this.loading = false;
    });
  }
  getEvents(): void {
    this.displayStatus = 3;
    this.loading = true;
    this.appService.getEvents(this.dateFrom.value, this.dateTo.value, this.league_id)
        .subscribe(res => {
          if (res.error) {
            this.errorTitle = res.message;
            this.displayStatus = 1;
            console.log(res);
            this.loading = false;
          }
          this.tableDataTabs.push({time: new Date(), data: res});
          this.loading = false;
        },
            err => {
          this.error = err;
          this.loading = false;
          console.log(err)});
  }
  handleDatapickerFrom(data) {
    this.dateFrom.setValue(`${data.year}-${data.month}-${data.day}`);
  }
  handleDatapickerTo(data): void {
    this.dateTo.setValue(`${data.year}-${data.month}-${data.day}`);
  }
}
