import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerformancesOverviewComponent} from './performances-overview/performances.component';
import {PieChartComponent} from '@components/chart/pie/pie.component';
import {ChartsModule} from 'ng2-charts';
import {LineChartComponent} from '@components/chart/line/line.component';
import {BarChartComponent} from '@components/chart/bar/bar.component';

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
