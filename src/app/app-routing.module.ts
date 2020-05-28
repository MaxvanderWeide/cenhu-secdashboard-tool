import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IncidentsOverviewComponent} from '@pages/incidents/incidents-overview/incidents.component';
import {PerformancesOverviewComponent} from '@pages/performances/performances-overview/performances.component';
import {NotfoundComponent} from '@pages/notfound/notfound.component';
import {ReportOverviewComponent} from '@pages/report/report-overview/report-overview.component';
import {AcademyOverviewComponent} from '@pages/academy/academy-overview/academy-overview.component';
import {Scope} from '@models/scope.enum';
import {AuthGuard} from '@app/auth/auth.guard';
import {DepartmentsOverviewComponent} from '@pages/departments/departments-overview/departments-overview.component';
import {DepartmentOverviewComponent} from '@components/department-overview/department-overview.component';

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
        data: {scopes: [Scope.CorporateSecurityTeamMember]}
      },
    ]
  },
  {
    path: 'departments/:departmentName',
    component: DepartmentOverviewComponent,
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
  {
    path: 'academy',
    component: AcademyOverviewComponent,
  },
  {
    path: 'performances',
    component: PerformancesOverviewComponent,
  },
  {
    path: 'report',
    component: ReportOverviewComponent,
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
