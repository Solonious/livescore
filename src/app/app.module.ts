import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-route.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SettingComponent } from './components/setting/setting.component';
import { LivescopeComponent } from './components/livescope/livescope.component';
import { TableComponent } from './components/table/table.component';

import { AppService } from './app-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    LivescopeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
