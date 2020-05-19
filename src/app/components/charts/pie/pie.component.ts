import {Component, Input, OnInit} from '@angular/core';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit{
  // tslint:disable-next-line:no-input-rename
  @Input('pieChart') pieChart: {
    data: {
      data: [];
      labels: [];
    };
    options: {};
    type: string;
    showLegend: boolean;
    plugins: {};
    colors: {};
  };

  ngOnInit(): void {
    this.pieChart.options = {
      responsive: true,
      legend: {
        position: 'top',
      }
    };
    this.pieChart.type = 'pie';
    this.pieChart.showLegend = false;
    this.pieChart.plugins = [pluginDataLabels];
    this.pieChart.colors =
      [
        {
          backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
      ];
  }
}
