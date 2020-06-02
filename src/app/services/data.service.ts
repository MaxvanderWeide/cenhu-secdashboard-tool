import {Incident} from '@models/incidents.model';
import {Department} from '@models/department.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }

  static throwError(error: HttpErrorResponse) { // eslint-disable-line
    const errorMessage = error.error.detail ? error.error.detail.nl : error.error; // eslint-disable-line
    if (error.error instanceof ErrorEvent) {
      console.error(`An unexpected error occurred: ${errorMessage}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${errorMessage}`);
    }
    return throwError(error);
  }

  public getIncidents(): Observable<Incident[]> {
    /* Mock Server-Calling service for a list of incidents */
    return this.http.get<Incident[]>('assets/temp/incidentData.json').pipe(catchError(DataService.throwError));
  }

  public getDepartments(): Observable<Department[]> {
    /* Mock Server-Calling service for a list of departments-overview */
    return this.http.get<Department[]>('assets/temp/departmentData.json').pipe(catchError(DataService.throwError));
  }
}
