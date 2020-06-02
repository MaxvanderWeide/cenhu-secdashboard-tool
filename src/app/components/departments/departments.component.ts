import {Component} from '@angular/core';
import {Department} from '@models/department.model';
import {DataService} from '@app/services/data.service';
import {DressingService} from '@app/services/dressing.service';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {

  public departments: Department[] = [];
  openIncidents: number = 0;

  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getDepartments().subscribe(
      (departments: Department[]) => {
        this.departments = departments;
      },
      () => {
        this.dressingService.message('Department data loading unsuccessful. Try again later.');
      }
    );
    for (const department of this.departments) {
      let openCount: number = 0;

      this.dataService.getIncidentsWithDepartment(department.code).forEach(value => {
          if (value.open) {
            openCount++;
          }
        }
      );

      this.openIncidents = openCount;
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
  }
}
