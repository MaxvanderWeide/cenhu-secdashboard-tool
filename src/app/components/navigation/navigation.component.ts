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
    const navbarItems = document.getElementsByClassName('navbar-items') as HTMLCollectionOf<HTMLElement>;

    navbarItems[0].style.animation = this.retracted ? '.6s moveFrom' : '2s moveTo';

    this.retracted = !this.retracted;
  }
}
