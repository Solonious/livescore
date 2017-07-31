import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app-service'

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
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getCountries();
    this.getLeagues();
  }
  getCountries(): void {
    this.appService.getCountries()
    .subscribe(res => this.countries = res);
  }
  getLeagues(): void {
    this.appService.getLeagues()
    .subscribe(res => this.leagues = res);
  }
  getStandings(): void {}
}
