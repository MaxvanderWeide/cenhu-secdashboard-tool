import {Incident} from '@models/incidents.model';
import {incidents} from 'src/assets/temp/mock-server.constants';

export class DataService {
  public static getIncidents(): Incident[] {
    /* Mock Server-Calling service for a list of incidents */
    return incidents;
  }
}
