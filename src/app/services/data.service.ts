import {Incident} from '@models/incidents.model';
import {departments, departmentData} from 'src/assets/temp/mock-server.constants';
import {Department} from '@models/department.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient){}

  public getIncidents(): Incident[] {
    /* Mock Server-Calling service for a list of incidents */
    const responseList: Incident[] = [];
    this.http.get<Incident[]>('assets/temp/incidentData.json').subscribe((response: Incident[]) => {
      // tslint:disable-next-line:forin
      for (const item in response) {
        responseList.push(response[item]);
      }
    });
    return responseList;
  }

  public getDepartments(): Department[] {
    /* Mock Server-Calling service for a list of incidents */
    return departments;
  }

  public getDepartmentData(name: string): Department {
    return departmentData;
  }
}
