import {Component} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  public isRetracted: boolean = true;
  public mobileRestracted: boolean = true;

  public toggleNav() {
    this.isRetracted = !this.isRetracted;
  }

  public toggleMobileNav() {
    this.mobileRestracted  = !this.mobileRestracted;
  }
}
