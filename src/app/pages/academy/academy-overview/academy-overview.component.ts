
import { Component, OnInit } from '@angular/core';
import {Academy} from '@models/academy.model';
// @ts-ignore
import SampleJson from '../../../../assets/temp_assets/convertcsv.json';

@Component({
  selector: 'app-academy-overview',
  templateUrl: './academy-overview.component.html',
  styleUrls: ['./academy-overview.component.scss']
})
export class AcademyOverviewComponent {
  records: Academy[] = [];

  avgHours: string;
  avgProgress: string;
  avgReviewScore: string;
  avgTrainerReview: string;

  yPercentage: string;
  nPercentage: string;

  quizScore: number = 0;
  quizAttempt: number = 0;

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
    }

    console.log(this.records);
    this.calculateData();
  }

  calculateData(): void {
    let sumHour: number = 0;
    let sumProgress: number = 0;
    let sumReviewScore: number = 0;
    let sumTrainerReview: number = 0;

    let yAmount: number = 0;
    let nAmount: number = 0;

    for (const record of this.records){
      sumHour += record.timeSpent;
      sumProgress += record.progress;
      sumReviewScore += record.reviewScore;
      sumTrainerReview += record.trainerReview;

      this.quizScore += record.quizScore;
      this.quizAttempt += record.quizAttempts;

      if (record.certificate === 'Y'){
        yAmount += 1;
      } else {
        nAmount += 1;
      }
    }

    this.avgHours = (sumHour / this.records.length).toFixed(2);
    this.avgProgress = (sumProgress / this.records.length).toFixed(2);
    this.avgReviewScore = (sumReviewScore / this.records.length).toFixed(2);
    this.avgTrainerReview = (sumTrainerReview / this.records.length).toFixed(2);

    this.yPercentage = ((yAmount / this.records.length) * 100).toFixed(2);
    this.nPercentage = ((nAmount / this.records.length) * 100).toFixed(2);
  }

}
