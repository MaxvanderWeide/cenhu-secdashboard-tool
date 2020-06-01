import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IncidentsOverviewComponent} from './incidents-overview/incidents.component';
import {IncidentComponent} from '@components/incident/incident.component';
import {DepartmentsComponent} from '@components/departments/departments.component';
import {AppRoutingModule} from '@app/app-routing.module';


@NgModule({
    declarations: [
        IncidentsOverviewComponent,
        IncidentComponent,
        DepartmentsComponent
    ],
    exports: [
        DepartmentsComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class IncidentsModule {
}
