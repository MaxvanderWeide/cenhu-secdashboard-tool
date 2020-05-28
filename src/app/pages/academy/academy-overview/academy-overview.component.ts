import {Component} from '@angular/core';
import {Academy} from '@models/academy.model';
// Temporary
// @ts-ignore
import SampleJson from 'src/assets/temp/convertcsv.json';


@Component({
  selector: 'app-academy-overview',
  templateUrl: './academy-overview.component.html',
  styleUrls: ['./academy-overview.component.scss']
})
export class AcademyOverviewComponent {
  records: Academy[] = [];

  totalIssues: number = 0;

  avgHours: number = 0;
  avgProgress: number = 0;
  totalProgress: number = 1;
  avgReviewScore: number = 0;
  avgTrainerReview: number = 0;

  yAmount: number = 0;
  yPercentage: number = 0;
  nPercentage: number = 0;

  quizScore: number = 0;
  quizAttempt: number = 0;

  public certificatePercentage: {
    title: string;
    data: number[];
    labels: string[];
    dataColors: string[];
  };

  public progressPercentage: {
    title: string;
    data: number[];
    labels: string[];
    dataColors: string[];
  };

  constructor() {
    for (const sample of SampleJson) {
      this.records.push(
        new Academy(
          sample.dateAssigned,
          sample.dateStarted,
          sample.dateCompleted,
          sample.team,
          sample.progress,
          sample.timeSpent,
          sample.reviewScore,
          sample.trainerReview,
          sample.certificate,
          sample.quizScore,
          sample.quizAttempts));
      console.log(sample);
    }

    this.calculateData();

    console.log(this.yPercentage);
  }

  calculateData(): void {
    let yAmount: number = 0;
    let nAmount: number = 0;

    for (const record of this.records) {
      this.avgHours += record.timeSpent;
      this.avgProgress += record.progress;
      this.avgReviewScore += record.reviewScore;
      this.avgTrainerReview += record.trainerReview;

      this.quizScore += record.quizScore;
      this.quizAttempt += record.quizAttempts;

      if (record.certificate === 'Y') {
        yAmount ++;
      }

      if (record.certificate === 'N') {
        nAmount ++;
      }
    }

    this.totalIssues = yAmount + nAmount;

    this.avgHours = Math.round(((this.avgHours / this.records.length) + Number.EPSILON) * 100) / 100;
    this.avgProgress = Math.round(((this.avgProgress / this.records.length) + Number.EPSILON) * 100) / 100;
    this.totalProgress = Math.round(((1 - this.avgProgress) + Number.EPSILON) * 100) / 100;
    this.avgReviewScore = Math.round(((this.avgReviewScore / this.records.length) + Number.EPSILON) * 100) / 100;
    this.avgTrainerReview = Math.round(((this.avgTrainerReview / this.records.length) + Number.EPSILON) * 100) / 100;

    this.yAmount = yAmount;
    this.yPercentage = Number(((yAmount / this.records.length) * 100).toFixed(2));
    this.nPercentage = Number((((this.records.length - yAmount) / this.records.length) * 100).toFixed(2));


    this.certificatePercentage = {
      title: 'Certificate',
      data: [this.yPercentage, this.nPercentage],
      labels: ['Certifications', 'Not certifications'],
      dataColors: ['rgba(85,255,43,0.4)', 'rgba(250,247,55,0.4)']
    };

    this.progressPercentage = {
      title: 'Progress',
      data: [this.avgProgress, this.totalProgress],
      labels: ['Progress done', 'In progress'],
      dataColors: ['rgba(85,255,43,0.4)', 'rgba(250,247,55,0.4)']
    };
  }

}
