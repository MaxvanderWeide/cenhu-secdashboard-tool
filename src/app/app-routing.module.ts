import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IncidentsOverviewComponent} from '@pages/incidents/incidents-overview/incidents.component';
import {PerformancesOverviewComponent} from '@pages/performances/performances-overview/performances.component';
import {NotfoundComponent} from '@pages/notfound/notfound.component';
import {ReportOverviewComponent} from '@pages/report/report-overview/report-overview.component';
import {AcademyOverviewComponent} from '@pages/academy/academy-overview/academy-overview.component';
import {Scope} from '@models/scope.enum';
import {AuthGuard} from '@app/auth/auth.guard';
import {LoginComponent} from '@components/login/login.component';
import {DepartmentsComponent} from "@pages/departments/departments.component";
import {DepartmentsOverviewComponent} from "@pages/departments-overview/departments-overview.component";

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
        path: 'performances',
        component: PerformancesOverviewComponent,
        data: {scopes: [Scope.CorporateSecurityTeamMember]},
        canActivate: [AuthGuard],
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
        path: 'departments/:departmentName',
        component: DepartmentsComponent,
        canActivate: [AuthGuard],
        data: {scopes: [Scope.CorporateSecurityTeamMember]}
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
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
