import {Component} from '@angular/core';
import {BarChart} from '@models/barchart.model';

@Component({
  selector: 'app-datasec',
  templateUrl: './datasec.component.html',
  styleUrls: ['./datasec.component.scss']
})
export class DatasecComponent {
  systemBarData: BarChart = {
    title: 'Systems Used',
    data: [
      {data: [70, 0, 65], label: 'Windows'},
      {data: [16.5, 0, 15], label: 'MacOS'},
      {data: [3.5, 90, 15], label: 'Linux'},
      {data: [10, 10, 5], label: 'Other'}
    ],
    labels: ['% Encrypted Systems', '% Unencrypted Systems', '% Total'],
    dataColors: ['green', 'red'],
    horizontal: false,
    legend: true
  };

}
