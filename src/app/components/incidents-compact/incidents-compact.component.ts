import {Component} from '@angular/core';
import {DataService} from '@app/services/data.service';
import {Incident} from '@models/incidents.model';
import {DressingService} from '@app/services/dressing.service';

@Component({
  selector: 'app-incidents-compact',
  templateUrl: './incidents-compact.component.html',
  styleUrls: ['./incidents-compact.component.scss']
})
export class IncidentsCompactComponent {
  incidents: Incident[];

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

  incidentIcon(severity: string): string {
    switch (severity) {
      case 'high':
        return 'fa-exclamation-triangle high-severity';
      case 'medium':
        return 'fa-exclamation-circle medium-severity';
      case 'low':
        return 'fa-bath low-severity';
    }
  }
}
