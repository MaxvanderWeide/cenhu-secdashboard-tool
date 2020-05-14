import {Component} from '@angular/core';

interface Message {
  name: string;
}

@Component({
  selector: 'app-incidents',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent {
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
}
