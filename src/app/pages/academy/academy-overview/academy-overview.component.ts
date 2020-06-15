import {Component} from '@angular/core';
import {Academy} from '@models/academy.model';
import {BarChart} from '@models/barchart.model';
import {DataService} from '@app/services/data.service';
import {LineChart} from '@models/linechart.model';
import {PieChart} from '@models/piechart.model';

@Component({
  selector: 'app-academy-overview',
  templateUrl: './academy-overview.component.html',
  styleUrls: ['./academy-overview.component.scss']
})
export class AcademyOverviewComponent {
  statistics: {
    avgHours: number;
    avgReviewScore: number;
    avgTrainerReview: number;
    quizScore: number;
    quizAttempt: number;
    progressToDo: number;
    progressInProgress: number;
    progressDone: number;
  };

  // Percentage of the bar graph
  barPercentage: number;
  barStringPercentage: string;
  barColor: string = '#ffb44d';

  academyData: Academy[];

  // Data for Graphs
  certificatePercentage: PieChart;
  pieData: PieChart;
  barData: BarChart;
  lineData: LineChart;

  constructor(private dataService: DataService) {
    this.dataService.getAcademyData().subscribe((academyData: Academy[]) => {
      this.academyData = academyData;
      this.setLineData(this.academyData);
      this.calculateData();
      this.calculateTeamAttempts();
      this.calculateCertificate();
      this.calculateAverageScore();
      this.calculateDateStatistics();
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
        // tslint:disable-next-line:max-line-length no-shadowed-variable
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
      labels: months.map((m: Date) => monthNames[m.getMonth()]),
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
      this.barColor = '#f66355';
    } else if (this.barPercentage > 60) {
      this.barColor = '#6dc193';
    }

    // Counting the average hour work
    this.statistics = {
      // tslint:disable:max-line-length
      avgHours: this.academyData.map((academy: Academy) => academy.timeSpent).reduce((a: number, b: number) => a !== 0 ? a + b : b, 0) / this.academyData.filter((academy: Academy) => academy.timeSpent !== 0).length,
      avgReviewScore: this.academyData.map((academy: Academy) => academy.reviewScore).reduce((a: number, b: number) => a + b, 0) / this.academyData.length,
      avgTrainerReview: this.academyData.map((academy: Academy) => academy.trainerReview).reduce((a: number, b: number) => a + b, 0) / this.academyData.length,
      quizScore: this.academyData.map((academy: Academy) => academy.quizScore).reduce((a: number, b: number) => a + b, 0) / this.academyData.length,
      // tslint:enable:max-line-length
      quizAttempt: this.academyData.map((academy: Academy) => academy.quizScore).reduce((a: number, b: number) => a + b, 0),
      progressToDo: this.academyData.filter((academy: Academy) => academy.progress === 0).length,
      progressInProgress: this.academyData.filter((academy: Academy) => academy.progress >= 0.1 && academy.progress <= 0.9).length,
      progressDone: this.academyData.filter((academy: Academy) => academy.progress === 1).length
    };
  }

  calculateTeamAttempts(): void {
    // tslint:disable-next-line:max-line-length
    const teamList: string[] = this.academyData.map((academy: Academy) => academy.team).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
    const attemptsList: {team: string; attempts: number}[] = [];

    for (const team of teamList) {
      let counter: number = 0;
      // tslint:disable-next-line:max-line-length
      this.academyData.filter((academy: Academy) => academy.team === team).map((academy: Academy) => academy.quizAttempts).forEach((count: number) => counter += count);

      attemptsList.push({
        team,
        attempts: counter}
      );
    }

    this.pieData = {
      data: attemptsList.map((attempt: {team: string; attempts: number}) => attempt.attempts),
      displayDataInChart: true,
      labels: attemptsList.map((attempt: {team: string; attempts: number}) => attempt.team),
      showLegend: true,
      title: 'Attempts per team'
    };
  }

  calculateCertificate(): void {
    // Data for pie chart
    const yCertificateAmount: number = this.academyData.filter((academy: Academy) => academy.certificate === 'Y').length;
    const yCertificatePercentage: number = Number(((yCertificateAmount / this.academyData.length) * 100).toFixed(2));
    const nCertificatePercentage: number = Number((((this.academyData.length - yCertificateAmount) /
      this.academyData.length) * 100).toFixed(2));

    // Pie chart of certificate
    this.certificatePercentage = {
      displayDataInChart: true,
      showLegend: true,
      dataColors: ['rgb(106, 193, 147)', 'rgb(246, 99, 85)'],
      title: 'Certificate',
      data: [yCertificatePercentage, nCertificatePercentage],
      labels: ['Certifications', 'Not certifications']
    };
  }

  calculateAverageScore(): void {
    const date: Date = new Date();
    let year: number = date.getFullYear() - 4;
    const yearlyScores: {year: number; averageScore: number}[] = [];

    while (year <= date.getFullYear()) {
      // tslint:disable:max-line-length
      const scoreLength: number = this.academyData.filter((academy: Academy) => new Date(academy.dateCompleted).getFullYear() === year).length;
      const avgScoreYear: number = this.academyData.filter((academy: Academy) => new Date(academy.dateCompleted).getFullYear() === year).map((academy: Academy) =>
        academy.quizScore).reduce((a: number, b: number) => a + b, 0) / scoreLength;
      // tslint:enable:max-line-length



      yearlyScores.push({
        year,
        averageScore: avgScoreYear
      });

      year++;
    }

    // Bar graph
    this.barData = {
      title: 'Average Quiz Score',
      data: [
        {data: yearlyScores.map((yearScore: {year: number; averageScore: number}) => Number(yearScore.averageScore.toFixed(2))), label: 'Score'},
      ],
      labels: yearlyScores.map((yearScore: {year: number; averageScore: number}) => yearScore.year.toString()),
      dataColors: ['blue'],
      horizontal: false,
      legend: true
    };
  }

  calculateDateStatistics(): void {
    const toDay: Date = new Date();
    const lastYear: Date = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);

    const monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const months: Date[] = AcademyOverviewComponent.getMonthsBeforeDate(lastYear, toDay);

    const started: { total: number }[] = [];
    const assigned: { total: number }[] = [];
    const completed: { total: number }[] = [];
    months.forEach((value: Date) => {
      started.push({
        total: this.academyData.filter((academy: Academy) => new Date(academy.dateStarted) >
          lastYear && new Date(academy.dateStarted).getMonth() === value.getMonth() && new Date(academy.dateStarted) <= new Date()).length
      });
      assigned.push({
        total: this.academyData.filter((academy: Academy) => new Date(academy.dateAssigned) >
          lastYear && new Date(academy.dateAssigned).getMonth() === value.getMonth() && new Date(academy.dateAssigned) <= new Date()).length
      });
      completed.push({
        total: this.academyData.filter((academy: Academy) => new Date(academy.dateCompleted) >
          // tslint:disable-next-line:max-line-length
          lastYear && new Date(academy.dateCompleted).getMonth() === value.getMonth() && new Date(academy.dateCompleted) <= new Date()).length
      });
    });

    this.lineData = {
      title: 'Start / Complete / Assign Date',
      data: [
        {
          data: started.map((data: { total: number }) => data.total),
          label: 'Started'
        },
        {
          data: assigned.map((data: { total: number }) => data.total),
          label: 'Assigned'
        },
        {
          data: completed.map((data: { total: number }) => data.total),
          label: 'Completed'
        }
      ],
      labels: months.map((m: Date) => monthNames[m.getMonth()]),
      dataColors: ['lightgreen', 'lightblue', 'yellow'],
      legend: true,
      aspectRatioOff: true
    };
  }
}
