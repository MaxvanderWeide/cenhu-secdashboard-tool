import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavigationComponent} from '@components/navigation/navigation.component';
import {HeaderComponent} from '@components/header/header.component';
import {ChartsModule} from 'ng2-charts';
import {EnvServiceProvider} from '@app/services/env.service.provider';
import {AuthGuard} from '@app/auth/auth.guard';
import {LoginComponent} from '@components/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {IncidentsCompactComponent} from '@components/incident/incidents-compact/incidents-compact.component';
import {DressingBarComponent} from '@components/dressing-bar/dressing-bar.component';
import {ModalComponent} from '@components/modal/modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatasecComponent} from '@components/datasec/datasec.component';
import {NotfoundComponent} from '@components/notfound/notfound.component';
import {ReportOverviewComponent} from '@components/report-overview/report-overview.component';
import {DepartmentsOverviewComponent} from '@components/departments-overview/departments-overview.component';
import {DepartmentsComponent} from '@components/departments/departments.component';
import {DashboardComponent} from '@components/dashboard/dashboard.component';
import {IncidentsModule} from '@app/modules/incidents/incidents.module';
import {AcademyModule} from '@app/modules/academy/academy.module';
import {ChartModule} from '@app/modules/chart/chart.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    NotfoundComponent,
    ReportOverviewComponent,
    LoginComponent,
    DepartmentsOverviewComponent,
    IncidentsCompactComponent,
    DressingBarComponent,
    DepartmentsComponent,
    ModalComponent,
    DashboardComponent,
    DatasecComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        IncidentsModule,
        ChartsModule,
        AcademyModule,
        NgbModule,
        ChartModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [EnvServiceProvider, AuthGuard],
  exports: [
    NgbModule,
    IncidentsCompactComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
