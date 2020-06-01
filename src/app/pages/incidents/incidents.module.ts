import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IncidentsOverviewComponent} from './incidents-overview/incidents.component';
import {IncidentComponent} from '@components/incident/incident.component';
import {AppRoutingModule} from '@app/app-routing.module';


@NgModule({
  declarations: [
        IncidentsOverviewComponent,
        IncidentComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class IncidentsModule {
}
