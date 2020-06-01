import { Component } from '@angular/core';
import {Department} from '@models/department.model';
// TODO - remove
// @ts-ignore
import {DataService} from '@app/services/data.service';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {

  public departments: Department[] = this.dataService.getDepartments();
  openIncidents: number = 0;

  constructor(private dataService: DataService) {
    for (const department of this.departments) {
      let closedCount: number = 0;

      console.log(department.data.incidents);

      department.data.incidents.forEach(value => { // eslint-disable-line @typescript-eslint/typedef
          if (!value.closed) {
            closedCount++;
          }
        }
      );

      this.openIncidents = department.data.incidents.length - closedCount;
    }
  }

  toggleInformation(event: MouseEvent): void {
    const departmentElement: Element = (event.currentTarget as HTMLElement).parentElement.querySelector('.department-box-body');

    if (departmentElement.classList.contains('active')) {
      (event.currentTarget as HTMLElement).children[0].classList.replace('fa-chevron-down', 'fa-chevron-right');
      departmentElement.classList.remove('active');
    } else {
      (event.currentTarget as HTMLElement).children[0].classList.replace('fa-chevron-right', 'fa-chevron-down');
      departmentElement.classList.add('active');
    }

    console.log(this.departments);
  }
}
