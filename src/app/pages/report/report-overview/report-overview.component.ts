import {Component} from '@angular/core';
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
  public departmentInput: string;
  public subjectInput: string;
  public severityInput: string;
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
        this.dressingService.message('Report data loading unsuccessful. Try again later.');
      }
    );
  }

  onSubmit(reportForm: NgForm): void {
    console.log(reportForm);
    this.id = (this.reports.length + 1);
    console.log(this.dateTime.replace(this.reTime, '$1 $2'));
  }

}

