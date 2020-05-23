import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() lineChart: {
    data: ChartDataSets[],
    labels: Label[],
    options: {
      responsive: boolean,
      scales: {
        xAxes: [{
          id?: string,
          position?: string
        }],
        yAxes: [{
          id?: string,
          position?: string
        }]
      }
    },
    colors: {}[]
    legend: boolean,
    type: ChartType
  };

  ngOnInit(): void {
    console.log(this.lineChart);
    this.lineChart.options = {
      responsive: true,
      scales: {
        xAxes: [{}],
        yAxes: [
          {
            id: 'y-axis-0',
            position: 'left',
          }
        ]
      }
    };
    this.lineChart.colors = [
      { // blue
        backgroundColor: 'rgba(35,90,179, 0.3)',
        borderColor: 'blue',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // red
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];
    this.lineChart.legend = true;
    this.lineChart.type = 'line';
    console.log(this.lineChart);
  }
}
