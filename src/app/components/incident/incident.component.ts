import {Component, OnInit, Input} from '@angular/core';

interface Message {
  message: string;
  severity: string;
  url?: string;
}

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('type') alertType: string;

  messages: Message[] = [
    {message: 'M1 scored poorly', severity: 'high', url: '#'},
    {message: 'M1 scored poorly without reference', severity: 'high'},
    {message: 'M1 scored poorly', severity: 'high', url: '#'},
    {message: 'M1 scored poorly without reference', severity: 'high'},
    {message: 'M1 scored poorly', severity: 'high', url: '#'},
    {
      // tslint:disable-next-line:max-line-length
      message: 'M1 scored poorly without reference. Will cancel after 100 retries. Retrying in 1 second(s). No feedback expected from user.',
      severity: 'high'
    },
    {message: 'M1 scored poorly', severity: 'high', url: '#'},
    {message: 'M1 scored poorly without reference', severity: 'high'},
    {message: 'M1 scored poorly', severity: 'high', url: '#'},
    {message: 'M1 scored poorly without reference', severity: 'high'},
    {message: 'M1 scored poorly', severity: 'medium', url: '#'},
    {message: 'M1 scored poorly', severity: 'medium', url: '#'},
    {message: 'M1 scored poorly', severity: 'medium', url: '#'},
    {message: 'M1 scored poorly without reference', severity: 'high'},
  ];
  headerText: string;
  severityClass: string;

  ngOnInit(): void {
    console.log(this.alertType);
    this.checkAlertType(this.alertType);
  }

  getMessages(): Message[] {
    return this.messages.filter(message => {
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
