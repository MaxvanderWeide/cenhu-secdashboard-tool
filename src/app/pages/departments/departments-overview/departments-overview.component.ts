import { Component } from '@angular/core';
import {Department} from '@models/department.model';
import { CommonModule } from '@angular/common';
// Temporary
// @ts-ignore
import DepartmentJson from 'src/assets/temp/departments.json';

@Component({
  selector: 'app-deparments-overview',
  templateUrl: './departments-overview.component.html',
  styleUrls: ['./departments-overview.component.scss']
})
export class DepartmentsOverviewComponent {
  public departments: Department[] = [];

  constructor() {
    for (const department of DepartmentJson) {
      this.departments.push(
        new Department(
          department.name,
          department.cleanUrl
        )
      );
    }
  }

}
