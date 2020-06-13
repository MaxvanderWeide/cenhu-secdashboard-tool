import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NavigationComponent} from '@app/components/navigation/navigation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NavigationComponent]
})

export class HeaderComponent {
  @ViewChild('navMenu', {read: ElementRef}) navMenu: ElementRef;
  @Input() rootSibling: NavigationComponent;
}
