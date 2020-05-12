import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from '../header/header.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [HeaderComponent]
})

export class NavigationComponent implements OnInit, AfterViewInit {

  // @ViewChild('navBar', {read: ElementRef}) navBar: ElementRef;
  public isExtended = false;

  public ngOnInit(): void {
    this.toggleNavbar();
  }

  ngAfterViewInit(): void {
    if (window.screen.width > 375) {
      document.querySelector('header').style.left = this.isExtended ? '60px' : '250px';
    }
  }

  public toggleNavbar(): void {
    this.isExtended = !this.isExtended;
    if (window.screen.width > 375) {
      document.querySelector('header').style.left = this.isExtended ? '60px' : '250px';
    }
  }

}
