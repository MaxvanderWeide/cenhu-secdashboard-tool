import {Component} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-keyperformances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesOverviewComponent {
  public pieData: {
    data: number[];
    labels: string[];
  } = {
    data: [300, 500, 100],
    labels: ['data1.1', 'data1.2', 'data1.3'],
  };

  public lineData: {
    data: ChartDataSets[],
    labels: Label[]
  } = {
    data: [
      {data: [65, 59, 80, 81, 56, 55, 40, 52, 31, 23, 64, 31], label: 'Series A'}
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
}
