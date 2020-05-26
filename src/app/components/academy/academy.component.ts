import { Component } from '@angular/core';
// @ts-ignore
import SampleJson from '../../../assets/temp_assets/convertcsv.json';
import {CSVRecord} from '@models/academy.model';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss']
})
export class AcademyComponent {
  records: CSVRecord[] = [];

  public avgHours: string;
  public avgProgress: string;
  public avgReviewScore: string;
  public avgTrainerReview: string;

  public yPercentage: string;
  public nPercentage: string;

  public quizScore: number;
  public quizAttempt: number;

  constructor() {
    for (const sample of SampleJson) {
      this.records.push(
        new CSVRecord(
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
    this.calculateDate();
  }

  calculateDate(){
    let sumHour = 0;
    let sumProgress = 0;
    let sumReviewScore = 0;
    let sumTrainerReview = 0;

    let yAmount = 0;
    let nAmount = 0;

    let sumQuizScore = 0;
    let sumQuizAttempt = 0;

    for (const record of this.records){
      sumHour += record.timeSpent;
      sumProgress += record.progress;
      sumReviewScore += record.reviewScore;
      sumTrainerReview += record.trainerReview;

      sumQuizScore += record.quizScore;
      sumQuizAttempt += record.quizAttempts;

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

    this.quizScore = sumQuizScore;
    this.quizAttempt = sumQuizAttempt;
  }

}
