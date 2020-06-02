import { Component } from '@angular/core';
import {Department} from '@models/department.model';
import {DataService} from '@app/services/data.service';
import {DressingService} from '@app/services/dressing.service';
import {AppComponent} from '@app/app.component';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {

  public departments: Department[] = [];
  isMobile: boolean = AppComponent.isMobile();

  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getDepartments().subscribe(
      (departments: Department[]) => {
        this.departments = departments;
      },
      () => {
        this.dressingService.message('Department data loading unsuccessful. Try again later.');
      }
    );
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
  }
}
