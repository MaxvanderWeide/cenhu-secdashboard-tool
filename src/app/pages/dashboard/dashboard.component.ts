import {Component} from '@angular/core';
import {DataService} from '@app/services/data.service';
import {Department} from '@models/department.model';
import {Incident} from '@models/incidents.model';
import {LineChart} from '@models/linechart.model';
import {DressingService} from '@app/services/dressing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  lineData: LineChart;
  incidentsStats: {
    total: number;
    open: number;
    high: number;
    medium: number;
    low: number;
  };
  departmentStats: {
    department: string;
    open: number;
  }[] = [];

  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getDepartments().subscribe(
      (departments: Department[]) => {
        this.dataService.getIncidents().subscribe((incidents: Incident[]) => {
          this.incidentsStats = {
            total: incidents.length,
            open: incidents.filter((s: Incident) => s.open).length,
            high: incidents.filter((s: Incident) => s.severity === 'high').length,
            medium: incidents.filter((s: Incident) => s.severity === 'medium').length,
            low: incidents.filter((s: Incident) => s.severity === 'low').length,
          };
          departments.forEach((department: Department) =>
            this.departmentStats.push({
              department: department.department,
              open: incidents.filter((s: Incident) => s.open && s.department === department.code).length
            })
          );
          this.setLineData(incidents);
        });
      },
      () => {
        this.dressingService.message('Department data loading unsuccessful. Try again later.');
      }
    );
  }

  private static getMonthsBeforeDate(from: Date, to: Date): Date[] {
    const monthNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const arr: Date[] = [];
    for (let i: number = from.getMonth() + 1; i <= (12 * (to.getFullYear() - from.getFullYear())) + to.getMonth(); i++) {
      arr.push(new Date(Math.floor(from.getFullYear() + (i / 12)), monthNumbers[i % 12]));
    }
    return arr;
  }

  private setLineData(incidents: Incident[]): void {
    // Get incidents per year
    const toDay: Date = new Date();
    const lastYear: Date = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);

    const monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const months: Date[] = DashboardComponent.getMonthsBeforeDate(lastYear, toDay);

    // Set bar data
    const incidentsMonth: { total: number }[] = [];
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
}

