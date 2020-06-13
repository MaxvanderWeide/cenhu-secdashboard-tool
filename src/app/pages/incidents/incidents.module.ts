import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IncidentsOverviewComponent} from './incidents-overview/incidents.component';
import {IncidentComponent} from '@components/incident/incident.component';
import {AppRoutingModule} from '@app/app-routing.module';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [
    IncidentsOverviewComponent,
    IncidentComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class IncidentsModule {
}
