import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './router/app-route.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Ng2PaginationModule} from 'ng2-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SettingComponent } from './components/setting/setting.component';
import { LivescopeComponent } from './components/livescope/livescope.component';
import { TableComponent } from './components/table/table.component';

import { AppService } from './app-service';
import { NgbdDatepickerPopup } from './components/ui/datepicker/datepicker.component';
import { TabComponent } from './components/ui/tab/tab.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    LivescopeComponent,
    TableComponent,
    NgbdDatepickerPopup,
    TabComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    Ng2PaginationModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
