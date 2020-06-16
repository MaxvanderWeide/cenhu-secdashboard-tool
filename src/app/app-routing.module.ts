import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Scope} from '@models/scope.enum';
import {AuthGuard} from '@app/auth/auth.guard';
import {LoginComponent} from '@components/login/login.component';
import {DatasecComponent} from '@components/datasec/datasec.component';
import {DepartmentsComponent} from '@components/departments/departments.component';
import {ReportOverviewComponent} from '@components/report-overview/report-overview.component';
import {IncidentsOverviewComponent} from '@app/modules/incidents/incidents-overview/incidents.component';
import {AcademyOverviewComponent} from '@app/modules/academy/academy-overview/academy-overview.component';
import {DepartmentsOverviewComponent} from '@components/departments-overview/departments-overview.component';
import {DashboardComponent} from '@components/dashboard/dashboard.component';
import {NotfoundComponent} from '@components/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'academy',
        component: AcademyOverviewComponent,
        canActivate: [AuthGuard],
        data: {scopes: [Scope.CorporateSecurityTeamMember]}
      },
      {
        path: 'report',
        component: ReportOverviewComponent,
        canActivate: [AuthGuard],
        data: {scopes: [Scope.CorporateSecurityTeamMember]}
      },
      {
        path: 'incidents',
        component: IncidentsOverviewComponent,
        canActivate: [AuthGuard],
        data: {scopes: [Scope.CorporateSecurityTeamMember]}
      },
      {
        path: 'departments',
        component: DepartmentsOverviewComponent,
        canActivate: [AuthGuard],
        data: {scopes: [Scope.CorporateSecurityTeamMember]},
      },
      {
        path: 'datasec',
        component: DatasecComponent,
        canActivate: [AuthGuard],
        data: {scopes: [Scope.CorporateSecurityTeamMember]},
      },
      {
        path: 'departments/:departmentName',
        component: DepartmentsComponent,
        canActivate: [AuthGuard],
        data: {scopes: [Scope.CorporateSecurityTeamMember]}
      }
    ]
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {scopes: [Scope.CorporateSecurityTeamMember]},
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '**',
    redirectTo: 'notfound'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
