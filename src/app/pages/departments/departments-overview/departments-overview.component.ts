import { Component } from '@angular/core';
import {Department} from '@models/department.model';
// TODO - remove
// @ts-ignore
import {DataService} from '@app/services/data.service';

@Component({
  selector: 'app-deparments-overview',
  templateUrl: './departments-overview.component.html',
  styleUrls: ['./departments-overview.component.scss']
})
export class DepartmentsOverviewComponent {
  public departments: Department[] = DataService.getDepartments();

  toggleInformation(event: MouseEvent): void {
    const departmentElement: Element = (event.currentTarget as HTMLElement).parentElement.querySelector('.department-box-body');

    if (departmentElement.classList.contains('active')) {
      (event.currentTarget as HTMLElement).children[0].classList.replace('fa-chevron-down', 'fa-chevron-right');
      departmentElement.classList.remove('active');
    } else {
      (event.currentTarget as HTMLElement).children[0].classList.replace('fa-chevron-right', 'fa-chevron-down');
      departmentElement.classList.add('active');
    }
  }

}
