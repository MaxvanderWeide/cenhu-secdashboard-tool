import {Component} from '@angular/core';
import {Department} from '@models/department.model';
import {DataService} from '@app/services/data.service';
import {DressingService} from '@app/services/dressing.service';
import {AppComponent} from '@app/app.component';

@Component({
  selector: 'app-departments-overview',
  templateUrl: './departments-overview.component.html',
  styleUrls: ['./departments-overview.component.scss']
})
export class DepartmentsOverviewComponent {
  public departments: Department[] = [];
  isMobile: boolean = AppComponent.isMobile();

  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getDepartments().subscribe(
      (departments: Department[]) => {
        this.departments = departments;
        this.setStatistics(departments);
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

  private setStatistics(departments: Department[]): void {
    for (const department of departments) {
      const yearPerformance: number = department.performances.find((performance: {
        year: number;
        performance: number; }) => performance.year === new Date().getFullYear()).performance;
      let vulnerability: string;
      if (yearPerformance <= 20) {
        vulnerability = 'Critical';
      } else if (yearPerformance > 20 && yearPerformance <= 60) {
        vulnerability = 'Danger';
      } else if (yearPerformance > 60 && yearPerformance <= 80) {
        vulnerability = 'Medium';
      } else if (yearPerformance > 80) {
        vulnerability = 'Low';
      }

      department.statistics = {
        data: {
          employees: department.employees,
          vulnerability,
          averagePerformance: Number((department.performances.map((performance: {
            year: number; performance:
              number; }) => performance.performance).reduce((first: number, second: number) => first + second, 0) /
            department.performances.length).toFixed(2)),
          yearPerformance
        }
      };
    }
  }
}
