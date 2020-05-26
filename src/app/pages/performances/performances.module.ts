import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerformancesOverviewComponent} from './performances-overview/performances.component';
import {PieChartComponent} from '@components/charts/pie/pie.component';
import {ChartsModule} from 'ng2-charts';
import {LineChartComponent} from '@components/charts/line/line.component';
import {BarChartComponent} from '@components/charts/bar/bar.component';

@NgModule({
  declarations: [
    PerformancesOverviewComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ]
})
export class PerformancesModule {
}
