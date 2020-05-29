import {Component} from '@angular/core';
import {DataService} from '@app/services/data.service';
import {Incident} from '@models/incidents.model';
import {DressingService} from '@app/services/dressing.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html'
})
export class IncidentsOverviewComponent {
  public incidents: Incident[] = [];

  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getIncidents().subscribe(
      (incidents: Incident[]) => {
        this.incidents = incidents;
      },
      () => {
        this.dressingService.message('Incident data loading unsuccessful. Try again later.');
      }
    );
  }

  getIncidents(severity: string): Incident[] {
    if (this.incidents) {
      return this.incidents.filter((incident: Incident) => incident.severity === severity);
    }
  }
}
