import {Component, ViewChild} from '@angular/core';
import {CSVRecord} from "./Academy";

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
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: string[], headerLength: any) {
    const csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      const curruntRecord = (csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        const csvRecord: CSVRecord = new CSVRecord();
        csvRecord.dateAssigned = curruntRecord[0].trim();
        csvRecord.dateStarted = curruntRecord[1].trim();
        csvRecord.dateCompleted = curruntRecord[2].trim();
        csvRecord.teams = curruntRecord[3].trim();
        csvRecord.progress =  parseFloat(curruntRecord[4].trim());
        csvRecord.timeSpent = parseFloat(curruntRecord[5].trim());
        csvRecord.reviewScore = parseFloat(curruntRecord[6].trim());
        csvRecord.trainerReview = parseFloat(curruntRecord[7].trim());
        csvRecord.certificate = curruntRecord[8].trim();
        csvRecord.quizScore = parseFloat(curruntRecord[9].trim());
        csvRecord.quizAttempts = parseFloat(curruntRecord[10].trim());
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: string[]) {
    const headers = (csvRecordsArr[0]).split(',');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }

  getData(){
    var sumHour = 0;
    var sumProgress = 0;
    var sumReviewScore = 0;
    var sumTrainerReview = 0;

    var yAmount = 0;
    var nAmount = 0;

    var sumQuizScore = 0;
    var sumQuizAttempt = 0;

    for (let record of this.records){
      sumHour += record.timeSpent;
      sumProgress += record.progress;
      sumReviewScore += record.reviewScore;
      sumTrainerReview += record.trainerReview;

      sumQuizScore += record.quizScore;
      sumQuizAttempt += record.quizAttempts;

      if (record.certificate == 'Y'){
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
