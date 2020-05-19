import {Component} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  private retracted: boolean = true;

  public get isRetracted(): boolean {
    return this.retracted;
  }

  public toggleRetracted(): void {
    console.log('toggle');
    this.retracted = !this.retracted;
  }
}
