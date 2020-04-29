import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})

export class NavigationComponent implements AfterViewInit {

  @ViewChild('navBar', {read: ElementRef}) navBar: ElementRef;
  protected isExtended = false;

  public ngAfterViewInit(): void {
    this.toggleNavbar();
  }

  public toggleNavbar(): void {
    this.navBar.nativeElement.style.width = this.isExtended ? '250px' : '60px';
    this.isExtended = !this.isExtended;
  }

}
