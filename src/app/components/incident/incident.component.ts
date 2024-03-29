import {Component, Input} from '@angular/core';
import {Incident} from '@models/incidents.model';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent {
  @Input() incidents: Incident[];
  @Input() headerInfo: { color: string; name: string };
  searchNumber: string;

  public handleUrlClick(incident: Incident): void {
    if (incident.url) {
      window.location.href = incident.url;
    }
  }
}
