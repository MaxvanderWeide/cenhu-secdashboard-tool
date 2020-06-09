import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '@app/services/data.service';
import {Department} from '@models/department.model';
import {Incident} from '@models/incidents.model';
import {LineChart} from '@models/linechart.model';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  lineData: LineChart;
  incidentsStats: {
    total: number;
    closed: number;
    open: number;
  };


  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(params => { // eslint-disable-line @typescript-eslint/typedef
      this.dataService.getDepartments().subscribe(
        (departments: Department[]) => {
          this.dataService.getIncidents().subscribe((incidents: Incident[]) => {
            this.incidentsStats = {
              total: incidents.length,
              closed: incidents.filter((s: Incident) => !s.open).length,
              open: incidents.filter((s: Incident) => s.open).length
            };
            this.setLineData(incidents);
          });
        }
      );
    });
  }

  private setLineData(incidents: Incident[]): void {
    // Get incidents per year
    const toDay: Date = new Date();
    const lastYear: Date = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const months = this.getMonthsBeforeDate(lastYear, toDay);

    console.log(months);

    // Set bar data
    const incidentsMonth: { total: number; }[] = [];
    months.forEach((value: Date) => {
      incidentsMonth.push({
        // tslint:disable-next-line:max-line-length
        total: incidents.filter((incident: Incident) => new Date(incident.filed) > lastYear && new Date(incident.filed).getMonth() === value.getMonth()).length
      });
    });

    // Set bar data of chart
    this.lineData = {
      title: 'Incidents per month in the last year',
      data: [
        {
          data: incidentsMonth.map((incident: { total: number }) => incident.total),
          label: 'Total'
        },
      ],
      labels: months.map((m: Date) => monthNames[m.getMonth()]),
      dataColors: ['red'],
      legend: true
    };
  }

  private getMonthsBeforeDate(from, to): Date[] {
    const monthNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const arr = [];
    const fromYear =  from.getFullYear();
    const toYear =  to.getFullYear();
    const diffYear = (12 * (toYear - fromYear)) + to.getMonth();

    for (let i = from.getMonth() + 1; i <= diffYear; i++) {
      console.log(monthNumbers[i % 12]);
      arr.push(new Date(Math.floor(fromYear + (i / 12)), monthNumbers[i % 12]));
    }

    return arr;
  }
}

