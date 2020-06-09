import {Component, Input} from '@angular/core';
import {Report} from '@models/report.model';
import {DataService} from '@app/services/data.service';
import {DressingService} from '@app/services/dressing.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-report-overview',
  templateUrl: './report-overview.component.html',
  styleUrls: ['./report-overview.component.scss']
})

export class ReportOverviewComponent {
  public reports: Report[];
  public nameInput: string;
  public subjectInput: string;
  public severityInput: string;
  public departmentInput: string;
  public descriptionInput: string;
  public id: number;
  public dateTime: string = new Date().toLocaleString();
  public reTime: string;

  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getReports().subscribe(
      (reports: Report[]) => {
        this.reports = reports;
      },
      () => {
        this.dressingService.message('Oops something went wrong, please try again later');
      }
    );
  }
  onSubmit(reportForm: NgForm): void {
    console.log(reportForm);
    this.id = (this.reports.length + 1);
    console.log(this.dateTime.replace(this.reTime, '$1 $2'));
    // console.log(reportForm);
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
}
