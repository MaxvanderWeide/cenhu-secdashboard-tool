import {Component} from '@angular/core';
import {BarChart} from '@models/barchart.model';
import {LineChart} from '@models/linechart.model';

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

  dataLineData: LineChart = {
    title: 'Data Downloaded per Month * 10.000 GB',
    data: [
      {
        data: [1, 4, 1, 7, 4, 9, 2, 3, 1, 4, 5, 6],
        label: 'Data'
      }
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataColors: ['default'],
    legend: true,
    aspectRatioOff: true
  };

}
