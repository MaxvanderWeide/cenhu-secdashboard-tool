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
          backgroundColor: this.chart.dataColors,
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
