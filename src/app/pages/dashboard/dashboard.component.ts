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

  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.calculateConfiguration = {
      incidentOpenTotalRation: true, incidentMonthYearPercentage: true, relativeHighIncidentDepartment: true
    };
    this.dataService.getDepartments().subscribe(
      (departments: Department[]) => {
        this.dataService.getIncidents().subscribe((incidents: Incident[]) => {
          this.incidents = incidents;
          this.incidentsStats = {
            total: incidents.length,
            open: incidents.filter((s: Incident) => s.open).length,
            high: incidents.filter((s: Incident) => s.severity === 'high').length,
            medium: incidents.filter((s: Incident) => s.severity === 'medium').length,
            low: incidents.filter((s: Incident) => s.severity === 'low').length,
          };
          departments.forEach((department: Department) =>
            this.departmentStats.push({
              department,
              open: incidents.filter((s: Incident) => s.open && s.department === department.code).length
            })
          );
          this.setLineData(incidents);
          this.calculateSecurityLevel(); // Calculate the security level.
        });
      },
      () => {
        this.dressingService.message('Department data loading unsuccessful. Try again later.');
      }
    );
  }

  public settingsExpanded: boolean;
  public totalReverseSecurity: number;
  public securityColor: string;
  private incidents: Incident[];
  private departments: Department[];

  lineData: LineChart;
  incidentsStats: {
    total: number;
    open: number;
    high: number;
    medium: number;
    low: number;
  };
  departmentStats: {
    department: Department;
    open: number;
  }[] = [];
  calculateConfiguration: {
    incidentMonthYearPercentage: boolean;
    incidentOpenTotalRation: boolean;
    relativeHighIncidentDepartment: boolean;
  };

  private static getMonthsBeforeDate(from: Date, to: Date): Date[] {
    const monthNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const arr: Date[] = [];
    for (let i: number = from.getMonth() + 1; i <= (12 * (to.getFullYear() - from.getFullYear())) + to.getMonth(); i++) {
      arr.push(new Date(Math.floor(from.getFullYear() + (i / 12)), monthNumbers[i % 12]));
    }
    return arr;
  }

  public calculateSecurityLevel(): void {
    const incidentRatio: number = this.incidents.filter((incident: Incident) => incident.open).length / this.incidents.length;
    const incidentMonthOnYear: number = (this.incidents.filter((incident: Incident) => {
      const incidentDate: Date = new Date(incident.filed);
      return (new Date(new Date().setFullYear(new Date().getFullYear() - 1)) < incidentDate) &&
        incidentDate.getMonth() !== new Date().getMonth() && new Date(new Date().setFullYear(new Date().getFullYear() + 1)) > incidentDate;
    }).length / 11 + 1) / (this.incidents.filter((incident: Incident) => {
        return new Date(incident.filed).getMonth() === new Date().getMonth();
      }).length + 1);
    /* eslint-disable */
    const relativeHighIncidentDepartment: number = this.departmentStats.reduce((a, b) => a + (b.open || 0), 0) !== 0 ?
      (this.departmentStats.reduce((a, b) => a + (b.open || 0), 0) + 1) ** .733 /
      (Math.max.apply(Math, this.departmentStats.map(relative => relative.open)) + 1) : 1;
    /* eslint-enable */
    let checks = 0;
    for (const calculateConfigurationKey in this.calculateConfiguration) {
      if (this.calculateConfiguration[calculateConfigurationKey]) {
        checks++;
      }
    }
    // TODO: Clean up \/
    this.totalReverseSecurity = 0;
    if (this.calculateConfiguration.relativeHighIncidentDepartment) {
      this.totalReverseSecurity += (Math.round((((1 - relativeHighIncidentDepartment) / checks) * 100) * 100) / 100);
    }
    if (this.calculateConfiguration.incidentOpenTotalRation) {
      this.totalReverseSecurity += (Math.round(((incidentRatio / checks) * 100) * 100) / 100);
    }
    if (this.calculateConfiguration.incidentMonthYearPercentage) {
      this.totalReverseSecurity += (Math.round(((1 - incidentMonthOnYear) / checks) * 100) * 100) / 100;
    }
    this.totalReverseSecurity = (Math.round((100 - (this.totalReverseSecurity)) * 100) / 100);
    if (isNaN(this.totalReverseSecurity) || this.totalReverseSecurity < 0 || !isFinite(this.totalReverseSecurity)) {
      this.totalReverseSecurity = 0;
    }
    if (this.totalReverseSecurity > 100) {
      this.totalReverseSecurity = 100;
    }
    this.securityColor = '#f66355';
    if (this.totalReverseSecurity > 55) {
      this.securityColor = '#ffb44d';
    }
    if (this.totalReverseSecurity > 88) {
      this.securityColor = '#6dc193';
    }
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
        total: incidents.filter((incident: Incident) => new Date(incident.filed) >
          lastYear && new Date(incident.filed).getMonth() === value.getMonth() && new Date(incident.filed) <= new Date()).length
      });
    });

    incidents.forEach((incident: Incident) => console.log(new Date(incident.filed)));
    console.log(new Date());

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
      dataColors: ['orange'],
      legend: true
    };
  }
}

