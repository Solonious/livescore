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
  countries: Countries[];
  leagues: Leagues[];
  dateFrom = new FormControl();
  dateTo = new FormControl();
  country = new FormControl('Select country');
  league = new FormControl('Select league');
  tableDataTabs = [];
  errorTitle: string;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getCountries();
    this.country.valueChanges.subscribe(val => {
      this.getLeagues(val);
    });
  }
  getCountries(): void {
    this.appService.getCountries()
    .subscribe(res => this.countries = res);
  }
  getLeagues(id: any): void {
    this.appService.getLeagues(id)
    .subscribe(res => {
      this.leagues = res;
    });
  }
  getEvents(): void {
    this.appService.getEvents(this.dateFrom.value, this.dateTo.value, this.league.value)
        .subscribe(res => {
          if (res.error) {
            this.errorTitle = res.message;
          }
          this.tableDataTabs.push({time: new Date(), data: res});
        });
  }
  handleDatapickerFrom(data) {
    this.dateFrom.setValue(`${data.year}-${data.month}-${data.day}`);
  }
  handleDatapickerTo(data): void {
    this.dateTo.setValue(`${data.year}-${data.month}-${data.day}`);
  }
}
