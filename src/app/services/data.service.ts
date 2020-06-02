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

  public getIncidentsWithDepartment(departmentCode: string): Incident[] {
    /* Mock Server-Calling service for a list of incidents using department code */
    const departmentIncidents: Incident[] = [];
    this.http.get<Incident[]>('assets/temp/incidentData.json').pipe(catchError(DataService.throwError)).subscribe(
      (incidents: Incident[]) => {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < incidents.length; i++) {
          if (incidents[i].department === departmentCode) {
            departmentIncidents.push(incidents[i]);
          }
        }
      },
    );
    return departmentIncidents;
  }

  public getDepartments(): Observable<Department[]> {
    /* Mock Server-Calling service for a list of departments */
    return this.http.get<Department[]>('assets/temp/departmentData.json').pipe(catchError(DataService.throwError));
  }
}
