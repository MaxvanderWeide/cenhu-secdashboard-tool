import {Component, Input, OnInit} from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {PieChart} from '@models/piechart.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() chart: PieChart;

  ngOnInit(): void {
    const colors: string[] = [];
    if (!this.chart.dataColors) {
      // tslint:disable-next-line:forin
      for (const value in this.chart.data) {
        colors.push(`rgba(255, 153, 0,${this.chart.data[value] / this.chart.data.reduce((a, b) => a + b, 0)})`);
      }
    }
    this.chart.options = {
      responsive: true,
      legend: {},
      plugins: {
        datalabels: {
          display: this.chart.displayDataInChart
        }
      }
    };
    this.chart.type = 'pie';
    this.chart.plugins = [pluginDataLabels];
    this.chart.colors =
      [
        {
          backgroundColor: this.chart.dataColors ? this.chart.dataColors : colors,
        },
      ];


    if (window.screen.width <= 768) {
      this.chart.showLegend = true;
      this.chart.options.legend.position = 'bottom';
    } else {
      this.chart.options.legend.position = this.chart.legendPosition === undefined ? 'right' : this.chart.legendPosition;
      this.chart.options.legend.align = ['top', 'bottom'].includes(this.chart.legendPosition) ? 'start' : 'center';
    }
  }
}
