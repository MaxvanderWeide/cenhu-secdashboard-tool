import {Component} from '@angular/core';
import {BarChart} from '@models/barchart.model';
import {PieChart} from '@models/piechart.model';
import {LineChart} from '@models/linechart.model';

@Component({
  selector: 'app-keyperformances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesOverviewComponent {
  public awarenessData: BarChart = {
    title: 'Bar',
    data: [
      {data: [65, 59, 80, 81], label: 'Series A'},
      {data: [28, 48, 40, 19], label: 'Series B'}
    ],
    labels: ['2006', '2007', '2008', '2009'],
    dataColors: ['blue', 'red'],
    horizontal: true,
    legend: true
  };

  public defensibilityData: PieChart = {
    title: 'Defensibility',
    data: [99, 52, 32],
    labels: ['Certifications', 'TopDesk notifications', 'Incidents register'],
    dataColors: ['rgba(85,255,43,0.4)', 'rgba(250,247,55,0.4)', 'rgba(0,0,255,0.4)'],
    showLegend: true,
    displayDataInChart: false
  };

  public complianceData: PieChart = {
    title: 'BIC Compliance',
    data: [300, 500, 100],
    labels: ['data1.1', 'data1.2', 'data1.3'],
    dataColors: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    showLegend: true,
    displayDataInChart: true
  };

  public pieData: PieChart = {
    title: 'Taart is lekker',
    data: [300, 500, 100],
    labels: ['data1.1', 'data1.2', 'data1.3'],
    dataColors: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    showLegend: true,
    displayDataInChart: false
  };

  public lineData: LineChart = {
    title: 'Dit is een lijn',
    data: [
      {data: [65, 59, 80, 81, 56, 55, 40, 52, 31, 23, 64, 31], label: 'Series A'},
      {data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: 'Series B'}
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataColors: ['blue', 'red'],
    legend: true
  };

  public barData: BarChart = {
    title: 'Bar',
    data: [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    dataColors: ['blue', 'red'],
    horizontal: true,
    legend: true
  };
}
