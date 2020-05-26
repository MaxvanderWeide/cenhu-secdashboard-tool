import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IncidentsOverviewComponent} from '@pages/incidents/incidents-overview/incidents.component';
import {PerformancesOverviewComponent} from '@pages/performances/performances-overview/performances.component';
import {NotfoundComponent} from '@pages/notfound/notfound.component';
import {ReportOverviewComponent} from '@pages/report/report-overview/report-overview.component';
import {AcademyOverviewComponent} from '@pages/academy/academy-overview/academy-overview.component';

const routes: Routes = [
  {
    path: 'incidents',
    component: IncidentsOverviewComponent,
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
  {
    path: 'academy',
    component: AcademyOverviewComponent,
  },
  {
    path: 'performances',
    component: PerformancesOverviewComponent,
  },
  {
    path: 'report',
    component: ReportOverviewComponent,
  },
  {
    path: '**',
    redirectTo: 'notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
