import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {DataService} from '@app/services/data.service';
import {Department} from '@models/department.model';
import {Incident} from '@models/incidents.model';
import {Label} from 'ng2-charts';
import {DressingService} from '@app/services/dressing.service';
import {BarChart, PieChart} from '@models/chart.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  department: Department;
  incidentsBar: BarChart;
  performancesBar: BarChart;
  pieData: PieChart;

  constructor(private route: ActivatedRoute, private dataService: DataService, private dressingService: DressingService) {
    this.route.params.subscribe((params: Params) => {
      this.dataService.getDepartments().subscribe(
        (departments: Department[]) => {
          this.department = departments.find((s: Department) => s.cleanUrl === params.departmentName);
          this.setPerformanceBarData();
          this.dataService.getIncidents().subscribe((incidents: Incident[]) => {
              this.setStatistics(this.department, incidents);
              this.setIncidentsBarData(incidents);
            },
            () => {
              this.dressingService.message('Incident data loading unsuccessful. Try again later.');
            });
        },
        () => {
          this.dressingService.message('Department data loading unsuccessful. Try again later.');
        });
    });
    this.pieData = {
      title: 'Template',
      data: [300, 500, 100],
      labels: ['data1.1', 'data1.2', 'data1.3'],
      dataColors: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
      showLegend: false,
      displayDataInChart: false
    };
  }

  private setStatistics(department: Department, incidents: Incident[]): void {
    const yearPerformance: number = department.performances.find((performance: {
      year: number;
      performance: number;
    }) => performance.year === new Date().getFullYear()).performance;
    let vulnerability: string;
    if (yearPerformance <= 20) {
      vulnerability = 'Critical';
    } else if (yearPerformance > 20 && yearPerformance <= 60) {
      vulnerability = 'Danger';
    } else if (yearPerformance > 60 && yearPerformance <= 80) {
      vulnerability = 'Medium';
    } else if (yearPerformance > 80) {
      vulnerability = 'Low';
    }

    this.department.statistics = {
      data: {
        employees: department.employees,
        vulnerability,
        averagePerformance: Number((department.performances.map((performance: {
            year: number;
            performance: number;
          }) => performance.performance).reduce((first: number, second: number) => first + second, 0) /
          department.performances.length).toFixed(2)),
        yearPerformance
      },
      incidents: {
        total: incidents.filter((s: Incident) => s.department === this.department.code).length,
        closed: incidents.filter((s: Incident) => s.department === this.department.code && !s.open).length,
        open: incidents.filter((s: Incident) => s.department === this.department.code && s.open).length
      }
    };
  }

  private setIncidentsBarData(incidents: Incident[]): void {
    // Get incidents per year
    const date: Date = new Date();
    const lowestYear: number = new Date(incidents.reduce((prev: Incident, curr: Incident) =>
      new Date(prev.filed).getFullYear() < new Date(curr.filed).getFullYear() ? prev : curr).filed).getFullYear();
    const years: { currentYear: number; years: Label[]; yearsDiff: number; year: number } = {
      currentYear: date.getFullYear(),
      years: [],
      yearsDiff: date.getFullYear() - lowestYear,
      year: lowestYear
    };

    // Get all available years from lowest year to current year
    while (years.year <= date.getFullYear()) {
      years.years.push((years.currentYear - years.yearsDiff).toString());
      years.yearsDiff--;
      years.year++;
    }

    // Set bar data
    const incidentsYear: { total: number; open: number }[] = [];
    years.years.forEach((value: string) => {
      incidentsYear.push({
        total: incidents.filter((incident: Incident) =>
          new Date(incident.filed).getFullYear() === parseInt(value, 10)).length,
        open: incidents.filter((incident: Incident) =>
          new Date(incident.filed).getFullYear() === parseInt(value, 10) && incident.open).length
      });
    });

    // Set bar data of chart
    this.incidentsBar = {
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

  private setPerformanceBarData(): void {
    // Get incidents per year
    const date: Date = new Date();
    const lowestYear: number = this.department.performances.reduce(
      (prev: { year: number; performance: number },
       curr: { year: number; performance: number }) =>
        prev.year < curr.year ? prev : curr).year;

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
    const performancesYear: { year: number; performance: number }[] = [];
    years.years.forEach((value: string) => {
      performancesYear.push({
        year: parseInt(value, 10),
        performance: this.department.performances.find((performance: {
          year: number;
          performance: number;
        }) => performance.year === parseInt(value, 10)).performance
      });
    });

    // Set bar data of chart
    this.performancesBar = {
      title: 'Performance in years',
      data: [
        {
          data: performancesYear.map((performance: { performance: number }) => performance.performance),
          label: 'Performance'
        }
      ],
      labels: years.years,
      dataColors: ['green'],
      horizontal: false,
      legend: true
    };
  }
}
