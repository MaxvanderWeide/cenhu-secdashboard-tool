import {Component} from '@angular/core';
import {DressingService} from '@app/services/dressing.service';

@Component({
  selector: 'app-dressing-bar',
  templateUrl: './dressing-bar.component.html',
  styleUrls: ['./dressing-bar.component.scss'],
})

export class DressingBarComponent {
  dressingMessage: string = '';

  constructor(public dressingService: DressingService): void {
    this.dressingService.message$.subscribe(message => this.dressingMessage = message);
  }

}
