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
      legend: {
        position: 'right',
      },
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
  }
}
