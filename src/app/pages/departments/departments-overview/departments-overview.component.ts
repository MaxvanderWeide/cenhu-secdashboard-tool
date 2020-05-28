import { Component } from '@angular/core';
import {Department} from '@models/department.model';
// TODO - remove
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

  toggleInformation(event: MouseEvent): void {
    const departmentElement: Element = (event.target as HTMLElement).parentElement.parentElement.querySelector('.department-box-body');

    if (departmentElement.classList.contains('active')) {
      (event.target as HTMLElement).classList.replace('fa-chevron-down', 'fa-chevron-right');
      departmentElement.classList.remove('active');
    } else {
      (event.target as HTMLElement).classList.replace('fa-chevron-right', 'fa-chevron-down');
      departmentElement.classList.add('active');
    }
  }

}
