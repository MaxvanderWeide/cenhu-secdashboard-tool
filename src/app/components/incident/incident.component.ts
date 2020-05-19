import {Component, OnInit, Input} from '@angular/core';

interface Message {
  name: string;
}

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit{
  // tslint:disable-next-line:no-input-rename
  @Input('type') alertType: string;

  messages: Message[] = [
    {name: 'person Debora made a message'},
    {name: 'person Opal made a message'},
    {name: 'person Bean made a message'},
    {name: 'person Osborne made a message'},
    {name: 'person Debora made a message'},
    {name: 'person Opal made a message'},
    {name: 'person Bean made a message'},
    {name: 'person Osborne made a message'},
    {name: 'person Debora made a message'},
    {name: 'person Opal made a message'},
    {name: 'person Bean made a message'},
    {name: 'person Osborne made a message'}
  ];

  severityIcon: string;
  headerText: string;
  severityClass: string;

  ngOnInit(): void {
    console.log(this.alertType);
    this.checkAlertType(this.alertType);
  }

  checkAlertType(type: string): void {
    switch (type) {
      case 'high': {
        this.severityIcon = 'fa-exclamation-circle';
        this.headerText = 'High Security Risk Alerts';
        this.severityClass = 'high-incident';
        break;
      }
      case 'middle': {
        this.severityIcon = 'fa-exclamation-triangle';
        this.headerText = 'Medium Security Risk Alerts';
        this.severityClass = 'middle-incident';
        break;
      }
      case 'low': {
        this.severityIcon = 'fa-external-link-square';
        this.headerText = 'Low Security Risk Alerts';
        this.severityClass = 'low-incident';
        break;
      }
    }
  }
}
