import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {DataService} from '@app/services/data.service';
import {Department} from '@models/department.model';
import {PieChart} from '@models/piechart.model';
import {BarChart} from '@models/barchart.model';

@Component({
  selector: 'app-department-overview',
  templateUrl: './department-overview.component.html',
  styleUrls: ['./department-overview.component.scss']
})
export class DepartmentOverviewComponent implements OnInit {
  department: Department;
  public barData: BarChart;
  public pieData: PieChart;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
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
      this.department = this.dataService.getDepartmentData(params.departmentName);
    });

  }

}
