import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavigationComponent} from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NavigationComponent]
})

export class HeaderComponent {
  @ViewChild('header', {read: ElementRef}) header: ElementRef;

  constructor(private navigationComponent: NavigationComponent) {
  }

  public toggleNav() {
    this.navigationComponent.toggleNav();

    if (this.navigationComponent.isRetracted) {
      document.querySelector('.navbar-expand').classList.remove('navbar-expanded');
    } else {
      document.querySelector('.navbar-expand').classList.add('navbar-expanded');
    }
  }
}
