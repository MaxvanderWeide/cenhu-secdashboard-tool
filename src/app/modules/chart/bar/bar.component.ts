import {Component, Input, OnInit} from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {BarChart} from '@models/chart.model';
import {AppComponent} from '@app/app.component';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input() chart: BarChart;

  colorsList: { [property: string]: {} }[] = [
    {
      green:
        { // green
          backgroundColor: 'rgba(109,193,147)',
          borderColor: 'green',
        },
      blue:
        { // blue
          backgroundColor: 'rgba(78,148,174)',
          borderColor: 'blue',
        },
      red:
        { // red
          backgroundColor: 'rgba(246,99,85)',
          borderColor: 'red',
        },
      default:
        {
          backgroundColor: 'rgba(174,181,193)',
          borderColor: 'gray',
        }
    }
  ];

  ngOnInit(): void {
    this.chart.options = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      plugins: {
        datalabels: {
          clamp: true
        }
      }
    };
    this.chart.plugins = [pluginDataLabels];
    this.chart.type = this.chart.horizontal ? 'horizontalBar' : 'bar';
    this.chart.colors = [];
    for (const tempColor of this.chart.dataColors) {
      const color: {} = tempColor in this.colorsList[0] ? this.colorsList[0][tempColor] : this.colorsList[0].default;
      this.chart.colors.push(color);
    }

    if (AppComponent.isMobile()) {
      this.chart.legend = true;
    }
  }
}
