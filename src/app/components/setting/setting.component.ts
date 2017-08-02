import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AppService } from '../../app-service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [AppService]
})
export class SettingComponent implements OnInit {
  @Output() apiKey = new EventEmitter<string>();
  @Output() currentApi = new EventEmitter<string>();
  apis = [
    {
    id: 0,
    title: 'Select API',
    value: 'select api'
  }, {
    id: 1,
    title:'apifootbal',
    value: 'https://apifootball.com/api/?action='
  }, {
    id: 2,
    title: 'example api',
    value: 'example'
  }];
  apiKeyForm = new FormControl();
  currentApiForm = new FormControl('Select API');
  intervals = [5, 10, 15, 30, 60];
  displayStatus: number;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.currentApiForm.valueChanges.subscribe(res => {
      console.log(res);
      this.displayStatus = this.apis.filter(item => item.value === res)[0].id;
      console.log(this.displayStatus);
      // this.showApi = res ? true : false;
      // this.showUserName = !res ? true : false;
    });
  }
  saveChanges() {
    this.service.setApiKey(this.apiKeyForm.value);
    this.service.setCurrentApi(this.currentApiForm.value);
  }
}
