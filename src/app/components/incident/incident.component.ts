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

  ngOnInit(): void {
    console.log(this.alertType);
  }
}
