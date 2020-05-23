import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavigationComponent} from '@app/components/navigation/navigation.component';

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

  public toggleNav(target: string): void {
    if (this.navigationComponent.isRetracted) {
      this.navMenu.nativeElement.querySelector('em').classList.replace('fa-bars', 'fa-times');
    } else {
      this.navMenu.nativeElement.querySelector('em').classList.replace('fa-times', 'fa-bars');
    }

    this.navigationComponent.toggleRetracted(target);
  }
}
