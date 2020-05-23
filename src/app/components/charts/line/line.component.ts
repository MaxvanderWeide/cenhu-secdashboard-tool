import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() lineChart: {
    title: string;
    data: ChartDataSets[];
    labels: Label[];
    options: ChartOptions;
    colors: {}[];
    dataColors: string[];
    legend: boolean;
    type: ChartType;
  };

  colorsList: {[property: string]: {}}[] = [
    {
      green:
        { // green
          backgroundColor: 'rgba(0,255,0,0.3)',
          borderColor: 'green',
        },
      blue:
        { // blue
          backgroundColor: 'rgba(0,0,255,0.3)',
          borderColor: 'blue',
        },
      red:
        { // red
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
        },
      default:
        {
          backgroundColor: 'rgba(173,173,173,0.3)',
          borderColor: 'gray',
        }
    }
  ];

  ngOnInit(): void {
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
    this.lineChart.legend = true;
    this.lineChart.type = 'line';

    this.lineChart.colors = [];
    for (const tempColor of this.lineChart.dataColors) {
      const color: {} = tempColor in this.colorsList[0] ? this.colorsList[0][tempColor] : this.colorsList[0].default;
      this.lineChart.colors.push(color);
    }
  }
}
