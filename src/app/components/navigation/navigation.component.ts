import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {HeaderComponent} from '../header/header.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [HeaderComponent]
})

export class NavigationComponent implements AfterViewInit {

  @ViewChild('navBar', {read: ElementRef}) navBar: ElementRef;
  public isExtended = false;

  public ngAfterViewInit(): void {
    this.toggleNavbar();
  }

  public toggleNavbar(): void {
    this.navBar.nativeElement.style.width = this.isExtended ? '250px' : '60px';
    if (window.screen.width > 375) {
      document.querySelector('header').style.left = this.isExtended ? '250px' : '60px';
    }

    this.navBar.nativeElement.querySelector('.navbar-toggler em').className = this.isExtended ? 'fa fa-arrow-circle-left' : 'fa fa-arrow-circle-right';
    this.isExtended = !this.isExtended;
  }

}
