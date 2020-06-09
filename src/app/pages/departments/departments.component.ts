import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {DataService} from '@app/services/data.service';
import {Department} from '@models/department.model';
import {PieChart} from '@models/piechart.model';
import {BarChart} from '@models/barchart.model';
import {Incident} from '@models/incidents.model';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  department: Department;
  barData: BarChart;
  pieData: PieChart;
  incidentsStats: {
    total: number;
    closed: number;
    open: number;
  };

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(params => { // eslint-disable-line @typescript-eslint/typedef
      this.dataService.getDepartments().subscribe(
        (departments: Department[]) => {
          this.department = departments.find((s: Department) => s.cleanUrl === params.departmentName);
          this.dataService.getIncidents().subscribe((incidents: Incident[]) => {
            this.incidentsStats = {
              total: incidents.filter((s: Incident) => s.department === this.department.code).length,
              closed: incidents.filter((s: Incident) => s.department === this.department.code && !s.open).length,
              open: incidents.filter((s: Incident) => s.department === this.department.code && s.open).length
            };
            this.setBardata(incidents);
          });
        }
      );
    });
    this.pieData = {
      title: 'Chart',
      data: [300, 500, 100],
      labels: ['data1.1', 'data1.2', 'data1.3'],
      dataColors: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      showLegend: false,
      displayDataInChart: false
    };
  }

  private setBardata(incidents: Incident[]): void {
    // Get incidents per year
    const date: Date = new Date();
    // tslint:disable-next-line:max-line-length
    const lowestYear: number = new Date(incidents.reduce((prev: Incident, curr: Incident) => new Date(prev.filed).getFullYear() < new Date(curr.filed).getFullYear() ? prev : curr).filed).getFullYear();
    const years: { currentYear: number; years: Label[]; yearsDiff: number; year: number } = {
      currentYear: date.getFullYear(),
      years: [],
      yearsDiff: date.getFullYear() - lowestYear,
      year: lowestYear
    };

    // Get all available years from lowest year to curent year
    while (years.year <= date.getFullYear()) {
      years.years.push((years.currentYear - years.yearsDiff).toString());
      years.yearsDiff--;
      years.year++;
    }

    // Set bar data
    const incidentsYear: { total: number; open: number }[] = [];
    years.years.forEach((value: string) => {
      incidentsYear.push({
        total: incidents.filter((incident: Incident) => new Date(incident.filed).getFullYear() === parseInt(value, 10)).length,
        // tslint:disable-next-line:max-line-length
        open: incidents.filter((incident: Incident) => new Date(incident.filed).getFullYear() === parseInt(value, 10) && incident.open).length
      });
    });

    // Set bar data of chart
    this.barData = {
      title: 'Incidents in years',
      data: [
        {
          data: incidentsYear.map((incident: { total: number }) => incident.total),
          label: 'Total'
        },
        {
          data: incidentsYear.map((incident: { open: number }) => incident.open),
          label: 'Open'
        }
      ],
      labels: years.years,
      dataColors: ['blue', 'red'],
      horizontal: false,
      legend: true
    };
  }
}
