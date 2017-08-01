import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from '../components/home/home.component';
import { SettingComponent }      from '../components/setting/setting.component';
import { LivescopeComponent } from '../components/livescope/livescope.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    { path: 'setting',     component: SettingComponent },
    { path: 'livescore',     component: LivescopeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
