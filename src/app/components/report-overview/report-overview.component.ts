import {Component} from '@angular/core';
import {Report} from '@models/report.model';
import {DataService} from '@app/services/data.service';
import {DressingService} from '@app/services/dressing.service';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {Department} from '@models/department.model';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss'],
})

export class ReportOverviewComponent {
  public reports: Report[];
  public reTime: string;
  public departmentVal: boolean;
  public departments: Department[];

  public nameInput: string;
  public departmentControl = new FormControl('', Validators.required);
  public subjectInput = new FormControl('', Validators.required);
  public severityInput = new FormControl('', Validators.required);


  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getReports().subscribe(
      (reports: Report[]) => {
        this.reports = reports;
      },
      () => {
        this.dressingService.message('Reports loading unsuccessfully. Please try again later.');
      }
    );
    this.dataService.getDepartments().subscribe(
      (departments: Department[]) => {
        this.departments = departments;
      },
      () => {
        this.dressingService.message('Department data loading unsuccessful. Try again later.');
      }
    );
  }

  onSubmit(reportForm: NgForm): void {
    this.departmentVal = typeof reportForm.value.departmentInput !== 'string';
    if (reportForm.valid) {
      this.reports.push({
        name: reportForm.value.name,
        department: reportForm.value.departmentInput,
        subject: reportForm.value.subjectInput,
        severity: reportForm.value.severityInput,
        description: reportForm.value.descriptionInput,
        date: new Date().toLocaleString().replace(this.reTime, '$1 $2'),
        open: true
      });
    }
  }

  openUp(event: MouseEvent): void {
    const reportElement: HTMLElement = (event.currentTarget as HTMLElement).parentElement;
    const reportContent: HTMLElement = reportElement.querySelector('.reports-item-body');

    reportContent.classList.toggle('active');
    (event.currentTarget as HTMLElement).querySelector('.arrow').classList.toggle('open');
  }
}
