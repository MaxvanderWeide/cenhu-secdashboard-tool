import {Component, ViewChild} from '@angular/core';
import {CSVRecord} from "./Academy";

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss']
})
export class AcademyComponent {
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

}
