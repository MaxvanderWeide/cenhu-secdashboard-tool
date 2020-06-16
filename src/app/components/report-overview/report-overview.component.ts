import {Component} from '@angular/core';
import {Report} from '@models/report.model';
import {DataService} from '@app/services/data.service';
import {DressingService} from '@app/services/dressing.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss'],
})

export class ReportOverviewComponent {
  public reports: Report[];
  public dateTime: string = new Date().toLocaleString();
  public reTime: string;
  public object: HTMLElement;
  public departmentVal: boolean;

  public nameInput: string;

  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getReports().subscribe(
      (reports: Report[]) => {
        this.reports = reports;
      },
      () => {
        this.dressingService.message('Reports loading unsuccessfully. Please try again later.');
      }
    );
  }

  onSubmit(reportForm: NgForm): void {

    this.departmentVal = typeof reportForm.value.departmentInput !== 'string';
    if (this.nameInput !== undefined) {
      this.reports.push({
        id: this.reports.length + 1,
        name: reportForm.value.name,
        department: reportForm.value.departmentInput,
        subject: reportForm.value.subjectInput,
        severity: reportForm.value.severityInput,
        description: reportForm.value.descriptionInput,
        date: this.dateTime.replace(this.reTime, '$1 $2'),
        open: true
      });
    }
  }

  openUp(id: number): void {
    this.object = document.getElementById('content-' + id);
    if (this.object.classList.contains('active')) {
      this.object.classList.remove('active');
    } else {
      this.object.classList.add('active');
    }
  }
}
