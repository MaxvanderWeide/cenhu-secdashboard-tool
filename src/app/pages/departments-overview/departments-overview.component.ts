import {Component} from '@angular/core';
import {Department} from '@models/department.model';
import {DataService} from '@app/services/data.service';
import {DressingService} from '@app/services/dressing.service';

@Component({
  selector: 'app-departments-overview',
  templateUrl: './departments-overview.component.html',
  styleUrls: ['./departments-overview.component.scss']
})
export class DepartmentsOverviewComponent {

  public departments: Department[] = [];
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
}
