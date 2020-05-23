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
    title: string;
    data: number[];
    labels: string[];
    dataColors: string[];
  } = {
    title: 'Taart is lekker',
    data: [300, 500, 100],
    labels: ['data1.1', 'data1.2', 'data1.3'],
    dataColors: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)']
  };

  public lineData: {
    title: string;
    data: ChartDataSets[];
    labels: Label[];
    dataColors: string[];
  } = {
    title: 'Dit is een lijn',
    data: [
      {data: [65, 59, 80, 81, 56, 55, 40, 52, 31, 23, 64, 31], label: 'Series A'},
      {data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: 'Series B'}
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataColors: ['blue', 'red']
  };
}
