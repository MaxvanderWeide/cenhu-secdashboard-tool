import {Component} from '@angular/core';
import {Academy} from '@models/academy.model';
import {BarChart} from '@models/barchart.model';
import {DataService} from '@app/services/data.service';
import {LineChart} from '@models/linechart.model';


@Component({
  selector: 'app-academy-overview',
  templateUrl: './academy-overview.component.html',
  styleUrls: ['./academy-overview.component.scss']
})
export class AcademyOverviewComponent {

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

  // Percentage of the bar graph
  barPercentage: number;
  barStringPercentage: string;
  barColor: string = '#ffc107';

  academyData: Academy[];

  // Count average hours work
  avgHours: number;

  // Average review score
  avgReviewScore: number;

  // Average trainer review
  avgTrainerReview: number;

  // Data for certificates
  yCertificateAmount: number;
  yCertificatePercentage: number;
  nCertificatePercentage: number;

  // Data for quiz
  quizScore: number;
  quizAttempt: number;

  // Variables for progress
  progressToDo: number;
  progressInProgress: number;
  progressDone: number;

  // Data for Graphs
  public certificatePercentage: {
    title: string;
    data: number[];
    labels: string[];
    dataColors?: string[];
  };

  barData: BarChart;

  lineData: LineChart;

  constructor(private dataService: DataService) {
    this.dataService.getAcademyData().subscribe((academyData: Academy[]) => {
      this.academyData = academyData;
      this.setLineData(this.academyData);
      this.calculateData();
    });
  }

  // To-DO Refactor Code
  private static getMonthsBeforeDate(from: Date, to: Date): Date[] {
    const monthNumbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const arr: Date[] = [];
    for (let i: number = from.getMonth() + 1; i <= (12 * (to.getFullYear() - from.getFullYear())) + to.getMonth(); i++) {
      arr.push(new Date(Math.floor(from.getFullYear() + (i / 12)), monthNumbers[i % 12]));
    }
    return arr;
  }

  // To-DO Refactor Code
  private setLineData(academy: Academy[]): void {
    // Get incidents per year
    const toDay: Date = new Date();
    const lastYear: Date = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);

    const monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const months: Date[] = AcademyOverviewComponent.getMonthsBeforeDate(lastYear, toDay);

    // Set bar data
    const incidentsMonth: { total: number }[] = [];
    months.forEach((value: Date) => {
      incidentsMonth.push({
        // tslint:disable-next-line:max-line-length
        total: academy.filter((academy: Academy) => new Date(academy.dateAssigned)
          > lastYear && new Date(academy.dateAssigned).getMonth() === value.getMonth()).length
      });
    });

    // Line graph
    this.lineData = {
      title: 'Line',
      data: [
        {
          data: incidentsMonth.map((incident: { total: number }) => incident.total),
          label: 'Total'
        }
      ],
      labels:  months.map((m: Date) => monthNames[m.getMonth()]),
      dataColors: ['red'],
      legend: true
    };
  }

  calculateData(): void {

    // Data for Bar graph
    this.barPercentage = (this.academyData.map((academy: Academy) =>
      academy.progress).reduce((a: number, b: number) => a + b, 0) / this.academyData.length) * 100;
    this.barStringPercentage = String(this.barPercentage + '%');

    // Color of bar graph
    if (this.barPercentage <= 40) {
      this.barColor = 'red';
    } else if (this.barPercentage > 60) {
      this.barColor = 'green';
    }
    // TODO : Comment what they do
    // Counting the average hour work
    this.avgHours = this.academyData.map((academy: Academy) => academy.timeSpent).reduce((a: number, b: number) => a !== 0 ? a + b : b, 0)
      / this.academyData.filter((academy: Academy) => academy.timeSpent !== 0).length;

    // Counting the average reviewScore
    this.avgReviewScore = this.academyData.map((academy: Academy) =>
      academy.reviewScore).reduce((a: number, b: number) => a + b, 0) / this.academyData.length;

    // Counting the average Trainer review
    this.avgTrainerReview = this.academyData.map((academy: Academy) =>
      academy.trainerReview).reduce((a: number, b: number) => a + b, 0) / this.academyData.length;

    // Counting the average quiz score
    this.quizScore = this.academyData.map((academy: Academy) =>
      academy.quizScore).reduce((a: number, b: number) => a + b, 0) / this.academyData.length;

    // Counting the quiz attempts
    this.quizAttempt = this.academyData.map((academy: Academy) =>
      academy.quizScore).reduce((a: number, b: number) => a + b, 0);

    // Showing numbers for tasks that are in progress, done or not started yet
    this.progressToDo = this.academyData.filter((academy: Academy) => academy.progress === 0).length;
    this.progressInProgress = this.academyData.filter((academy: Academy) => academy.progress >= 0.1 && academy.progress <= 0.9).length;
    this.progressDone = this.academyData.filter((academy: Academy) => academy.progress === 1).length;

    // Data for pie chart
    this.yCertificateAmount = this.academyData.filter((academy: Academy) => academy.certificate === 'Y').length;
    this.yCertificatePercentage = Number(((this.yCertificateAmount / this.academyData.length) * 100).toFixed(2));
    this.nCertificatePercentage = Number((((this.academyData.length - this.yCertificateAmount) /
      this.academyData.length) * 100).toFixed(2));

    // Bar graph
    this.barData = {
      title: 'Bar',
      data: [
        {data: [100, 111, 132, 304], label: 'Total'},
        {data: [7, 32, 2, 102], label: 'Open'}
      ],
      labels: this.months,
      dataColors: ['blue', 'red'],
      horizontal: false,
      legend: true
    };

    // Pie chart of certificate
    this.certificatePercentage = {
      title: 'Certificate',
      data: [this.yCertificatePercentage, this.nCertificatePercentage],
      labels: ['Certifications', 'Not certifications']
    };
  }
}
