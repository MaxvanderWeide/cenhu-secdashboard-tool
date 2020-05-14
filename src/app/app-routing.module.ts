import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {AcademyComponent} from './components/academy/academy.component';
import {IncidentsOverviewComponent} from './incidents/incidents-overview/incidents.component';

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
