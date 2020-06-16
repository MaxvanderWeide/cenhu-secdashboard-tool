import {Component, Input, OnInit} from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {LineChart} from '@models/chart.model';

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
          backgroundColor: 'rgba(109,193,147, 0.6)',
          borderColor: 'green',
        },
      blue:
        { // blue
          backgroundColor: 'rgba(78,148,174,0.6)',
          borderColor: 'blue',
        },
      red:
        { // red
          backgroundColor: 'rgba(246,99,85, 0.6)',
          borderColor: 'red',
        },
      orange:
        { // red
          backgroundColor: 'rgba(255,180,77, 0.6)',
          borderColor: '#d69741',
        },
      yellow:
        {
          backgroundColor: 'rgba(255,206,86,0.6)',
          borderColor: '#ffce56',
        },
      lightblue:
        {
        backgroundColor: 'rgba(64,165,236,0.6)',
        borderColor: '#40a5ec',
        },
      lightgreen:
        {
          backgroundColor: 'rgba(7,156,71,0.6)',
          borderColor: '#079c47',
        },
      default:
        {
          backgroundColor: 'rgba(174,181,193, 0.6)',
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
    this.chart.options.maintainAspectRatio = !this.chart.aspectRatioOff;

    this.chart.plugins = [pluginDataLabels];
    this.chart.colors = [];
    for (const tempColor of this.chart.dataColors) {
      const color: {} = tempColor in this.colorsList[0] ? this.colorsList[0][tempColor] : this.colorsList[0].default;
      this.chart.colors.push(color);
    }

    if (window.screen.width <= 900) {
      this.chart.legend = true;
    }
  }
}
