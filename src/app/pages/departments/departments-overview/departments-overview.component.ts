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

  constructor(private dataService: DataService) {
  }

  public departments: Department[] = this.dataService.getDepartments();
}
