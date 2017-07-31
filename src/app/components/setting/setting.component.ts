import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  apis = ['apifootbal', 'example api'];
  intervals = [5, 10, 15, 30, 60];
  constructor() { }

  ngOnInit() {
  }

}
