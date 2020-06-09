import {Component} from '@angular/core';
import {Academy} from '@models/academy.model';
// Temporary
// @ts-ignore
import Academies from 'src/assets/temp/academyData.json';
import {BarChart} from '@models/barchart.model';
import {ChartDataSets} from "chart.js";
import {Label} from "ng2-charts";


@Component({
  selector: 'app-academy-overview',
  templateUrl: './academy-overview.component.html',
  styleUrls: ['./academy-overview.component.scss']
})
export class AcademyOverviewComponent {

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

  // Percentage of the bar graph
  progPercentage: number = 0;
  progStringPercentage: string = '';
  progColor: string = '#ffc107';

  records: Academy[] = [];

  // Count average hours work
  avgHours: number = 0;
  timeNull: number = 0;

  avgProgress: number = 0;

  // Average review score
  avgReviewScore: number = 0;
  reviewNull: number = 0;

  // Average trainer review
  avgTrainerReview: number = 0;
  trainerNull: number = 0;

  // Data for certificates
  yAmount: number = 0;
  yPercentage: number = 0;
  nPercentage: number = 0;

  // Data for quiz
  quizScore: number = 0;
  quizAttempt: number = 0;

  // Variables for progress
  progWaiting: number = 0;
  progProgress: number = 0;
  progDone: number = 0;

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

  constructor() {
    for (const academy of Academies) {
      this.records.push(
        { dateAssigned: academy.dateAssigned,
          dateStarted: academy.dateStarted,
          dateCompleted: academy.dateCompleted,
          team: academy.team,
          progress: academy.progress,
          timeSpent: academy.timeSpent,
          reviewScore: academy.reviewScore,
          trainerReview: academy.trainerReview,
          certificate: academy.certificate,
          quizScore: academy.quizScore,
          quizAttempts: academy.quizAttempts,
          status: academy.status,
          title: academy.functie }
        );
    }

    this.calculateData();
  }

  calculateData(): void {

    for (const record of this.records) {
      this.avgHours += record.timeSpent;
      this.avgProgress += record.progress;
      this.avgReviewScore += record.reviewScore;
      this.avgTrainerReview += record.trainerReview;

      this.quizScore += record.quizScore;
      this.quizAttempt += record.quizAttempts;

      // When the row time spent has no value
      if (record.timeSpent === 0) {
        this.timeNull++;
      }

      // When the row review score has no value
      if (record.reviewScore === 0) {
        this.reviewNull++;
      }

      // When the row trainer review has no value
      if (record.trainerReview === 0) {
        this.trainerNull++;
      }

      if (record.certificate === 'Y') {
        this.yAmount++;
      }

      // Progress row data
      if (record.progress === 0) {
        this.progWaiting++;
      }

      if (record.progress >= 0.1 && record.progress <= 0.9) {
        this.progProgress++;
      }

      if (record.progress === 1) {
        this.progDone++;
      }
    }

    this.avgHours = Math.round(((this.avgHours / (this.records.length - this.timeNull)) + Number.EPSILON) * 100) / 100;

    this.avgReviewScore = Math.round(((this.avgReviewScore / (this.records.length - this.reviewNull)) + Number.EPSILON) * 100) / 100;
    this.avgTrainerReview = Math.round(((this.avgTrainerReview / (this.records.length - this.trainerNull)) + Number.EPSILON) * 100) / 100;

    this.yPercentage = Number(((this.yAmount / this.records.length) * 100).toFixed(2));
    this.nPercentage = Number((((this.records.length - this.yAmount) / this.records.length) * 100).toFixed(2));

    // Automatic loading percentage of Bar graph
    this.avgProgress = Math.round(((this.avgProgress / this.records.length) + Number.EPSILON) * 100) / 100;
    this.progPercentage = Math.round(this.avgProgress * 100);
    this.progStringPercentage = String(this.avgProgress);
    this.progStringPercentage = this.progPercentage + '%';

    // Color of bar graph
    if (this.progPercentage <= 40){
      this.progColor = 'red';
    } else if (this.progPercentage > 60){
      this.progColor = 'green';
    }

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
      data: [this.yPercentage, this.nPercentage],
      labels: ['Certifications', 'Not certifications']
    };

  }
}
