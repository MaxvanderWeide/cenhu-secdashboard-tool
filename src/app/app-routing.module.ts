import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AcademyComponent} from '@components/academy/academy.component';
import {IncidentsOverviewComponent} from '@pages/incidents/incidents-overview/incidents.component';
import {PerformancesOverviewComponent} from '@pages/performances/performances-overview/performances.component';
import {NotfoundComponent} from '@pages/notfound/notfound.component';

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
    component: AcademyComponent,
  },
  {
    path: 'performances',
    component: PerformancesOverviewComponent,
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
