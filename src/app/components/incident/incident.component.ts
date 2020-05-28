import {Component, OnInit, Input} from '@angular/core';
import {Incident} from '@models/incidents.model';
import {DataService} from '@app/services/data.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('type') alertType: string;

  headerText: string;
  severityClass: string;

  ngOnInit(): void {
    console.log(this.alertType);
    this.checkAlertType(this.alertType);
  }

  getMessages(): Incident[] {
    return DataService.getIncidents().filter(message => { // eslint-disable-line @typescript-eslint/typedef
      if (message.severity === this.alertType) {
        return message;
      }
    });
  }

  checkAlertType(type: string): void {
    switch (type) {
      case 'high': {
        this.headerText = 'High Security Risk Alerts';
        this.severityClass = 'high-incident';
        break;
      }
      case 'medium': {
        this.headerText = 'Medium Security Risk Alerts';
        this.severityClass = 'middle-incident';
        break;
      }
      case 'low': {
        this.headerText = 'Low Security Risk Alerts';
        this.severityClass = 'low-incident';
        break;
      }
    }
  }
}
