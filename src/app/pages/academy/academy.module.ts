import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcademyOverviewComponent} from './academy-overview/academy-overview.component';
import {ChartModule} from '@components/chart/chart.module';


@NgModule({
    declarations: [
        AcademyOverviewComponent
    ],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class AcademyModule {
}
