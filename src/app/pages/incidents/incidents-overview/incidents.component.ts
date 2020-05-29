import {Component} from '@angular/core';
import {DataService} from '@app/services/data.service';
import {Incident} from '@models/incidents.model';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html'
})
export class IncidentsOverviewComponent {
  public incidents: Incident[];
  constructor(private dataService: DataService) {
    this.incidents = this.dataService.getIncidents();
  }

  getIncidents(severity: string): Incident[] {
    return this.incidents.filter(incident => incident.severity === severity);
  }
}
