import {Component, Input, OnInit} from '@angular/core';
import {LineChart} from '@models/linechart.model';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() chart: LineChart;

  colorsList: { [property: string]: {} }[] = [
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
    this.chart.options = {
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
    this.chart.legend = true;
    this.chart.type = 'line';

    this.chart.plugins = [pluginDataLabels];
    this.chart.colors = [];
    for (const tempColor of this.chart.dataColors) {
      const color: {} = tempColor in this.colorsList[0] ? this.colorsList[0][tempColor] : this.colorsList[0].default;
      this.chart.colors.push(color);
    }
  }
}
