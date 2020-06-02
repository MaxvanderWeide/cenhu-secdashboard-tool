import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavigationComponent} from '@components/navigation/navigation.component';
import {HeaderComponent} from '@components/header/header.component';
import {NotfoundComponent} from '@pages/notfound/notfound.component';
import {IncidentsModule} from '@pages/incidents/incidents.module';
import {ChartsModule} from 'ng2-charts';
import {PerformancesModule} from '@pages/performances/performances.module';
import {ReportOverviewComponent} from '@pages/report/report-overview/report-overview.component';
import {AcademyModule} from '@pages/academy/academy.module';
import {EnvServiceProvider} from '@app/services/env.service.provider';
import {AuthGuard} from '@app/auth/auth.guard';
import {LoginComponent} from '@components/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartModule} from '@components/chart/chart.module';
import {HttpClientModule} from '@angular/common/http';
import {IncidentsCompactComponent} from '@components/incidents-compact/incidents-compact.component';
import {DressingBarComponent} from '@components/dressing-bar/dressing-bar.component';
import {DepartmentsOverviewComponent} from '@pages/departments-overview/departments-overview.component';
import {DepartmentComponent} from '@components/department/department.component';
import {DepartmentsComponent} from '@pages/departments/departments.component';
import {ModalComponent} from '@components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    NotfoundComponent,
    ReportOverviewComponent,
    LoginComponent,
    DepartmentsOverviewComponent,
    DepartmentComponent,
    IncidentsCompactComponent,
    DressingBarComponent,
    DepartmentsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IncidentsModule,
    ChartsModule,
    PerformancesModule,
    AcademyModule,
    NgbModule,
    ChartModule,
    HttpClientModule
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
