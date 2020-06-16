import {Component} from '@angular/core';
import {Academy} from '@models/academy.model';
import {DataService} from '@app/services/data.service';
import {BarChart, LineChart, PieChart} from '@models/chart.model';
import {AppComponent} from '@app/app.component';

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
      this.calculateData();
      this.calculateTeamAttempts();
      this.calculateCertificate();
      this.calculateAverageScore();
      this.calculateDateStatistics();
    });
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

    this.statistics = {
      avgHours: this.academyData.map((academy: Academy) => academy.timeSpent).reduce((a: number, b: number) => a
      !== 0 ? a + b : b, 0) / this.academyData.filter((academy: Academy) => academy.timeSpent !== 0).length,
      avgReviewScore: this.academyData.map((academy: Academy) => academy.reviewScore).reduce((a: number, b: number) =>
        a + b, 0) / this.academyData.length,
      avgTrainerReview: this.academyData.map((academy: Academy) => academy.trainerReview).reduce((a: number, b: number) =>
        a + b, 0) / this.academyData.length,
      quizScore: this.academyData.map((academy: Academy) => academy.quizScore).reduce((a: number, b: number) =>
        a + b, 0) / this.academyData.length,
      quizAttempt: this.academyData.map((academy: Academy) => academy.quizScore).reduce((a: number, b: number) =>
        a + b, 0),
      progressToDo: this.academyData.filter((academy: Academy) => academy.progress === 0).length,
      progressInProgress: this.academyData.filter((academy: Academy) => academy.progress >= 0.1 && academy.progress <= 0.9).length,
      progressDone: this.academyData.filter((academy: Academy) => academy.progress === 1).length
    };
  }

  calculateTeamAttempts(): void {
    // tslint:disable-next-line:max-line-length
    const teamList: string[] = this.academyData.map((academy: Academy) => academy.team).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
    const attemptsList: { team: string; attempts: number }[] = [];

    for (const team of teamList) {
      let counter: number = 0;
      // tslint:disable-next-line:max-line-length
      this.academyData.filter((academy: Academy) => academy.team === team).map((academy: Academy) => academy.quizAttempts).forEach((count: number) => counter += count);

      attemptsList.push({
          team,
          attempts: counter
        }
      );
    }

    this.pieData = {
      data: attemptsList.map((attempt: { team: string; attempts: number }) => attempt.attempts),
      displayDataInChart: true,
      labels: attemptsList.map((attempt: { team: string; attempts: number }) => attempt.team),
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
    const yearlyScores: { year: number; averageScore: number }[] = [];

    while (year <= date.getFullYear()) {

      const scoreLength: number = this.academyData.filter((academy: Academy) =>
        new Date(academy.dateCompleted).getFullYear() === year).length;
      const avgScoreYear: number = this.academyData.filter((academy: Academy) =>
        new Date(academy.dateCompleted).getFullYear() === year).map((academy: Academy) =>
        academy.quizScore).reduce((a: number, b: number) => a + b, 0) / scoreLength;

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
        {
          data: yearlyScores.map((yearScore: { year: number; averageScore: number }) => Number(yearScore.averageScore.toFixed(2))),
          label: 'Score'
        },
      ],
      labels: yearlyScores.map((yearScore: { year: number; averageScore: number }) => yearScore.year.toString()),
      dataColors: ['blue'],
      horizontal: false,
      legend: true
    };
  }

  calculateDateStatistics(): void {
    const monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let months: string[] = monthNames.slice(0, new Date().getMonth() + 1);
    months = monthNames.slice(new Date().getMonth() + 1, monthNames.length).concat(months);

    const total: { started: number; assigned: number; completed: number }[] = [];

    months.forEach((month: string) => {
      total.push({
        started: this.academyData.filter((academy: Academy) => new Date(academy.dateStarted) >
          new Date(new Date().setFullYear(new Date().getFullYear() - 1)) &&
          new Date(academy.dateStarted).getMonth() === monthNames.indexOf(month) && new Date(academy.dateStarted) <= new Date()).length,
        assigned: this.academyData.filter((academy: Academy) => new Date(academy.dateAssigned) >
          new Date(new Date().setFullYear(new Date().getFullYear() - 1)) &&
          new Date(academy.dateAssigned).getMonth() === monthNames.indexOf(month) && new Date(academy.dateAssigned) <= new Date()).length,
        completed: this.academyData.filter((academy: Academy) => new Date(academy.dateCompleted) >
          new Date(new Date().setFullYear(new Date().getFullYear() - 1)) &&
          new Date(academy.dateCompleted).getMonth() === monthNames.indexOf(month) && new Date(academy.dateCompleted) <= new Date()).length
      });
    });

    this.lineData = {
      title: 'Start / Complete / Assign Date',
      data: [
        {
          data: total.map((data: { started: number; assigned: number; completed: number }) => data.started),
          label: 'Started'
        },
        {
          data: total.map((data: { started: number; assigned: number; completed: number }) => data.assigned),
          label: 'Assigned'
        },
        {
          data: total.map((data: { started: number; assigned: number; completed: number }) => data.completed),
          label: 'Completed'
        }
      ],
      labels: months,
      dataColors: ['lightgreen', 'lightblue', 'yellow'],
      legend: true,
      aspectRatioOff: !AppComponent.isMobile()
    };
  }
}
