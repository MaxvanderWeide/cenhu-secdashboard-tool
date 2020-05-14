import {Component} from '@angular/core';

interface Message {
  name: string;
}

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent {
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
