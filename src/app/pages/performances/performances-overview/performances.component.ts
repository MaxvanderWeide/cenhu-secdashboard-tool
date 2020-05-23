import {Component} from '@angular/core';

@Component({
  selector: 'app-keyperformances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesOverviewComponent {
  public data: {
    data: number[];
    labels: string[];
  } = {
    data: [300, 500, 100],
    labels: ['data1.1', 'data1.2', 'data1.3'],
  };
}
