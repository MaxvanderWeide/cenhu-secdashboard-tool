import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PieChartComponent} from '@components/chart/pie/pie.component';
import {BarChartComponent} from '@components/chart/bar/bar.component';
import {LineChartComponent} from '@components/chart/line/line.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent,
    LineChartComponent
  ],
  exports: [
    PieChartComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class ChartModule {
}
