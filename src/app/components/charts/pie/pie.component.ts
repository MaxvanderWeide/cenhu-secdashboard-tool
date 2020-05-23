import {Component, Input, OnInit} from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieChartComponent implements OnInit{
  @Input() pieChart: {
    title: string,
    data: {
      data: [];
      labels: [];
    };
    labels: [];
    options: {};
    type: string;
    showLegend: boolean;
    plugins: {};
    colors: {};
    dataColors: string[];
  };

  ngOnInit(): void {
    this.pieChart.options = {
      responsive: true,
      legend: {
        position: 'right',
      }
    };
    this.pieChart.type = 'pie';
    this.pieChart.showLegend = true;
    this.pieChart.plugins = [pluginDataLabels];
    this.pieChart.colors =
      [
        {
          backgroundColor: this.pieChart.dataColors,
        },
      ];
  }
}
