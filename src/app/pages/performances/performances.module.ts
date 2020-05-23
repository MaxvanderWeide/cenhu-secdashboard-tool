import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PerformancesOverviewComponent} from './performances-overview/performances.component';
import {PieComponent} from '../../components/charts/pie/pie.component';

@NgModule({
  declarations: [
    PerformancesOverviewComponent,
    PieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PerformancesModule {
}
