import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [HeaderComponent]
})

export class NavigationComponent {

  // @ViewChild('navBar', {read: ElementRef}) navBar: ElementRef;
  public isRetracted: boolean = true;

}
