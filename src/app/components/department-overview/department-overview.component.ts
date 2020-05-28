import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// Temporary
// @ts-ignore
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {DataService} from "@app/services/data.service";

@Component({
  selector: 'app-department-overview',
  templateUrl: './department-overview.component.html',
  styleUrls: ['./department-overview.component.scss']
})
export class DepartmentOverviewComponent implements OnInit {
  department: {
    name: string;
    data: {
      mainStatistics: {}[];
      incidents: {
        total: number;
        open: number;
      };
    };
  };
  public barData: {
    title: string;
    data: ChartDataSets[];
    labels: Label[];
    dataColors: string[];
    horizontal: boolean;
  };

  public pieData: {
    title: string;
    data: number[];
    labels: string[];
    dataColors: string[];
  };

  constructor(private route: ActivatedRoute) {
    this.department = {
      name: 'Human resource management',
      data: {
        mainStatistics: [
          {name: 'stat1', data: 25000},
          {name: 'stat2', data: 123},
          {name: 'stat3', data: 2},
          {name: 'stat4', data: 424123},
        ],
        incidents: {
          total: 999,
          open: 21
        }
      },
    };

    this.barData = {
      title: 'Bar',
      data: [
        {data: [100, 111, 132, 304], label: 'Total'},
        {data: [7, 32, 2, 102], label: 'Open'}
      ],
      labels: ['2015', '2016', '2017', '2018'],
      dataColors: ['blue', 'red'],
      horizontal: false
    };

    this.pieData = {
      title: 'Taart is lekker',
      data: [300, 500, 100],
      labels: ['data1.1', 'data1.2', 'data1.3'],
      dataColors: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)']
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params  => { // eslint-disable-line @typescript-eslint/typedef
      console.log(typeof params);
      for (const tempDepartment of DataService.getDepartments()) {
        console.log(tempDepartment);
      }
    });

  }

}
