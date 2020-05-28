import {Component, Input, OnInit} from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {ChartOptions} from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() chart: {
    title: string;
    data: {
      data: [];
      labels: [];
    };
    labels: [];
    options: ChartOptions;
    type: string;
    showLegend: boolean;
    plugins: {};
    colors: {};
    dataColors: string[];
  };

  ngOnInit(): void {
    this.chart.options = {
      responsive: true,
      legend: {
        position: 'right',
      }
    };
    this.chart.type = 'pie';
    this.chart.showLegend = true;
    this.chart.plugins = [pluginDataLabels];
    this.chart.colors =
      [
        {
          backgroundColor: this.chart.dataColors,
        },
      ];
    console.log(this.chart);
  }
}
