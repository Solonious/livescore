import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app-service'

@Component({
  selector: 'app-livescope',
  templateUrl: './livescope.component.html',
  styleUrls: ['./livescope.component.css'],
  providers: [AppService]
})
export class LivescopeComponent implements OnInit {
  countries = [{country_name: 'USA'}];
  leagues = [{league_name: 'NHL'}];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getCountries();
  }
  getCountries(): void {
    this.appService.getCountries().subscribe(res => this.countries = res);
  }

}
