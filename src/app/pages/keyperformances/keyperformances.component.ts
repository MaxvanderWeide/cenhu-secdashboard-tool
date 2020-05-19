import {Component} from '@angular/core';

@Component({
  selector: 'app-keyperformances',
  templateUrl: './keyperformances.component.html',
  styleUrls: ['./keyperformances.component.scss']
})
export class KeyperformancesComponent {
  public data: {} = {
    awareness:
      {
        data: [300, 500, 100],
        labels: ['data1.1', 'data1.2', 'data1.3'],
      },
    defensibility:
      {
        data: [100, 200, 300],
        labels: ['data2.1', 'data2.2', 'data2.3'],
      },
    bicCompliance:
      {
        data: [423, 213, 964],
        labels: ['data3.1', 'data3.2', 'data3.3'],
      },
  };
}
