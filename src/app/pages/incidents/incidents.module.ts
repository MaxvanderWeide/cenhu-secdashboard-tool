import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IncidentsOverviewComponent} from './incidents-overview/incidents.component';
import {IncidentComponent} from '@components/incident/incident.component';



@NgModule({
  declarations: [
    IncidentsOverviewComponent,
    IncidentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IncidentsModule { }
