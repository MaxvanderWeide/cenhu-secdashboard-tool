import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {DataService} from '@app/services/data.service';
import {Department} from '@models/department.model';
import {PieChart} from '@models/piechart.model';
import {BarChart} from '@models/barchart.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  department: Department;
  barData: BarChart;
  pieData: PieChart;
  incidentsStats: {
    total: number;
    closed: number;
    open: number;
  };

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(params => { // eslint-disable-line @typescript-eslint/typedef
      this.dataService.getDepartments().subscribe(
        (departments: Department[]) => {
          this.department = departments.find(s => s.cleanUrl === params.departmentName);

          let openCount: number = 0;
          let totalCount: number = 0;

          this.dataService.getIncidentsWithDepartment(this.department.code).forEach(value => {
              totalCount++;
              if (value.open) {
                openCount++;
              }
            }
          );

          this.incidentsStats = {
            total: totalCount,
            closed: totalCount - openCount,
            open: openCount
          };
        }
      );
    });
    this.barData = {
      title: 'Bar',
      data: [
        {data: [100, 111, 132, 304], label: 'Total'},
        {data: [7, 32, 2, 102], label: 'Open'}
      ],
      labels: ['2015', '2016', '2017', '2018'],
      dataColors: ['blue', 'red'],
      horizontal: false,
      legend: true
    };

    this.pieData = {
      title: 'Heey',
      data: [300, 500, 100],
      labels: ['data1.1', 'data1.2', 'data1.3'],
      dataColors: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      showLegend: false,
      displayDataInChart: false
    };
  }
}