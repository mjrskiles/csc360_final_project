import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendsComponent }      from './trends/trends.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { LiveTrafficComponent } from './live-traffic/live-traffic.component';

const routes: Routes = [
  { path: '', redirectTo: '/livetraffic', pathMatch: 'full' },
  { path: 'livetraffic', component: LiveTrafficComponent },
  { path: 'trends', component: TrendsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
