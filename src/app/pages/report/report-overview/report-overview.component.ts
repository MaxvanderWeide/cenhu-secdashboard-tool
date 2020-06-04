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
  private nameInput: string;
  private departmentInput: string;
  private subjectInput: string;
  private severityInput: string;
  private descriptionInput: string;
  private id: number;
  private dateTime: string = new Date().toLocaleString();
  private reTime: string;

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

