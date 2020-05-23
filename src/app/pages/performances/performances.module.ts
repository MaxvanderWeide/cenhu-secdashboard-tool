import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerformancesOverviewComponent} from './performances-overview/performances.component';
import {PieComponent} from '@components/charts/pie/pie.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    PerformancesOverviewComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class PerformancesModule {
}
