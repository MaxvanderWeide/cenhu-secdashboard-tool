import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {NavigationComponent} from '@app/components/navigation/navigation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NavigationComponent]
})

export class HeaderComponent {
  @ViewChild('navMenu', {read: ElementRef}) navMenu: ElementRef;

  @Output() rootAllowToggle = new EventEmitter();

  constructor(private navigationComponent: NavigationComponent) {
  }

  public toggleNav(): void {
    if (this.navigationComponent.retracted) {
      this.navMenu.nativeElement.querySelector('em').classList.replace('fa-bars', 'fa-times');
    } else {
      this.navMenu.nativeElement.querySelector('em').classList.replace('fa-times', 'fa-bars');
    }

    console.log('emit RootAllowToggle');
    this.rootAllowToggle.emit(null);
  }
}
