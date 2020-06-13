import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IncidentsOverviewComponent} from './incidents-overview/incidents.component';
import {IncidentComponent} from '@components/incident/incident.component';
import {AppRoutingModule} from '@app/app-routing.module';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from '@app/pipes/filter.pipe';


@NgModule({
  declarations: [
    IncidentsOverviewComponent,
    IncidentComponent,
    FilterPipe
  ],
  exports: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class IncidentsModule {
}
