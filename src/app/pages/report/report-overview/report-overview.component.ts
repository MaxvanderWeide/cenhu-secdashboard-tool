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
  public nameInput: string;
  public departmentInput: string;
  public subjectInput: string;
  public severityInput: string;
  public descriptionInput: string;
  public dateTime: string = new Date().toLocaleString();
  public reTime: string;
  public object: HTMLElement;

  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getReports().subscribe(
      (reports: Report[]) => {
        this.reports = reports;
      },
      () => {
        this.dressingService.message('Report data loading unsuccessful. Try again later.');
      }
    );
  }

  onSubmit(reportForm: NgForm): void {
    // TODO : Remove dressing service (DressingService is a snackbar for client/server errors, not validation errors)
    if (!this.nameInput) {
      this.dressingService.message('Please fill in a name');
    } else if (!this.departmentInput) {
      this.dressingService.message('Please choose a department');
    } else if (!this.subjectInput) {
      this.dressingService.message('Please choose a subject');
    } else if (!this.severityInput) {
      this.dressingService.message('Please choose a level of severity');
    } else if (!this.descriptionInput) {
      this.dressingService.message('Please enter a description');
    } else {
      this.reports.push({
        id: this.reports.length + 1,
        name: this.nameInput,
        department: this.departmentInput,
        subject: this.subjectInput,
        severity: this.severityInput,
        description: this.descriptionInput,
        date: this.dateTime.replace(this.reTime, '$1 $2'),
        open: true
      });
    }
    reportForm.reset();
  }

  openUp(id): void {
    // TODO : Add this functionality to HTML
    this.object = document.getElementById('content-' + id);
    if (this.object.classList.contains('active')) {
      this.object.classList.remove('active');
    } else {
      this.object.classList.add('active');
    }
  }
}
