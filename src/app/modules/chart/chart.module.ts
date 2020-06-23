import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import {PieChartComponent} from '@app/modules/chart/pie/pie.component';
import {BarChartComponent} from '@app/modules/chart/bar/bar.component';
import {LineChartComponent} from '@app/modules/chart/line/line.component';


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
