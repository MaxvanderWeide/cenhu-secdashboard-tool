import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AcademyOverviewComponent} from './academy-overview/academy-overview.component';
import {ChartModule} from '@components/chart/chart.module';
import {ProgressbarComponent} from '@components/progressbar/progressbar.component';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        AcademyOverviewComponent,
        ProgressbarComponent,
    ],
  imports: [
    CommonModule,
    ChartModule,
    NgbProgressbarModule
  ]
})
export class AcademyModule {
}
