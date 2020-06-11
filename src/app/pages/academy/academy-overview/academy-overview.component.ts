import {Component, OnInit} from '@angular/core';
import {Academy} from '@models/academy.model';
import {BarChart} from '@models/barchart.model';
import {ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {DataService} from '@app/services/data.service';


@Component({
  selector: 'app-academy-overview',
  templateUrl: './academy-overview.component.html',
  styleUrls: ['./academy-overview.component.scss']
})
export class AcademyOverviewComponent{

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

  public lineData: {
    title: string;
    data: ChartDataSets[];
    labels: Label[];
    dataColors: string[];
  };

  constructor(private dataService: DataService) {
    this.dataService.getAcademyData().subscribe((academyData: Academy[]) => {
      this.academyData = academyData;
      this.calculateData();
    });
  }

  calculateData(): void {

    // Data for Bar graph
    this.barPercentage = (this.academyData.map(a => a.progress).reduce((a, b) => a + b, 0) / this.academyData.length) * 100;
    this.barStringPercentage = String(this.barPercentage + '%');

    // Color of bar graph
    if (this.barPercentage <= 40){
      this.barColor = 'red';
    } else if (this.barPercentage > 60){
      this.barColor = 'green';
    }
    // TODO : Comment what they do && Add types to all function parameters
    this.avgHours = this.academyData.map(a => a.timeSpent).reduce((a, b) => a !== 0 ? a + b : b, 0)
      / this.academyData.filter((academy: Academy) => academy.timeSpent !== 0).length;

    this.avgReviewScore = this.academyData.map(a => a.reviewScore).reduce((a, b) => a + b, 0) / this.academyData.length;

    this.avgTrainerReview = this.academyData.map(a => a.trainerReview).reduce((a, b) => a + b, 0) / this.academyData.length;

    this.quizScore = this.academyData.map(a => a.quizScore).reduce((a, b) => a + b, 0) / this.academyData.length;

    this.quizAttempt = this.academyData.map(a => a.quizScore).reduce((a, b) => a + b, 0);

    this.progressToDo = this.academyData.filter((academy) => academy.progress === 0).length;

    this.progressInProgress = this.academyData.filter( (academy) => academy.progress >= 0.1 && academy.progress <= 0.9).length;

    this.progressDone = this.academyData.filter( (academy) => academy.progress === 1).length;

    // Data for pie chart
    this.yCertificateAmount = this.academyData.filter( (academy) => academy.certificate === 'Y').length;
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

    // Line graph
    this.lineData = {
      title: 'Line',
      data: [
        {data: [65, 59, 80, 81, 56, 55, 40, 52, 31, 23, 64, 31], label: 'Team A'},
        {data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: 'Team B'}
      ],
      labels: this.months,
      dataColors: ['blue', 'red']
    };

    // Pie chart of certificate
    this.certificatePercentage = {
      title: 'Certificate',
      data: [this.yCertificatePercentage, this.nCertificatePercentage],
      labels: ['Certifications', 'Not certifications']
    };
  }
}
