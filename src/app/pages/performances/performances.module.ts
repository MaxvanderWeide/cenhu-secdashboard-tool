import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerformancesOverviewComponent} from './performances-overview/performances.component';
import {ChartModule} from '@components/chart/chart.module';

@NgModule({
  declarations: [
    PerformancesOverviewComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class PerformancesModule {
}
