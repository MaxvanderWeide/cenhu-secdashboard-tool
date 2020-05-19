import {Component, ViewChild} from '@angular/core';
import {CSVRecord} from '../../models/academy.model';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss']
})
export class AcademyComponent {
  public avgHours: any;
  public avgProgress: any;
  public avgReviewScore: any;
  public avgTrainerReview: any;

  public yPercentage: any;
  public nPercentage: any;

  public quizScore: any;
  public quizAttempt: any;

  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;


  uploadListener(event: any): void {
    const files = event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      const input = event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        const csvData = reader.result.toString();
        const csvRecordsArray = (csvData).split(/\r\n|\n/);
        const headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        this.getData();
      };
      reader.onerror = () => {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: string[], headerLength: any) {
    const csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      const currentRecord = (csvRecordsArray[i]).split(',');
      if (currentRecord.length === headerLength) {
        const csvRecord: CSVRecord = new CSVRecord();
        csvRecord.dateAssigned = currentRecord[0].trim();
        csvRecord.dateStarted = currentRecord[1].trim();
        csvRecord.dateCompleted = currentRecord[2].trim();
        csvRecord.teams = currentRecord[3].trim();
        csvRecord.progress =  parseFloat(currentRecord[4].trim());
        csvRecord.timeSpent = parseFloat(currentRecord[5].trim());
        csvRecord.reviewScore = parseFloat(currentRecord[6].trim());
        csvRecord.trainerReview = parseFloat(currentRecord[7].trim());
        csvRecord.certificate = currentRecord[8].trim();
        csvRecord.quizScore = parseFloat(currentRecord[9].trim());
        csvRecord.quizAttempts = parseFloat(currentRecord[10].trim());
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: string[]) {
    const headers = (csvRecordsArr[0]).split(',');
    const headerArray = [];
    for (const j of headers) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
  }

  getData(){
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
