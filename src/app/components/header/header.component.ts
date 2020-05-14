import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavigationComponent} from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NavigationComponent]
})

export class HeaderComponent {
  @ViewChild('navMenu', {read: ElementRef}) navMenu: ElementRef;

  constructor(private navigationComponent: NavigationComponent) {
  }

  public toggleNav() {
    this.navigationComponent.toggleMobileNav();
    if (this.navigationComponent.mobileRestracted) {
      document.querySelector('.navbar-expand').classList.remove('mobile-navbar-expanded');
      this.navMenu.nativeElement.querySelector('em').classList.replace('fa-times', 'fa-bars');
    } else {
      document.querySelector('.navbar-expand').classList.add('mobile-navbar-expanded');
      this.navMenu.nativeElement.querySelector('em').classList.replace('fa-bars', 'fa-times');
    }
  }
}
