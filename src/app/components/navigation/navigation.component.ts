import {Component} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  private retracted: boolean = true;

  public get isRetracted(): boolean {
    return this.retracted;
  }

  public toggleRetracted(target: string): void {
    const targetClass = target === 'header' ? 'navbar-expand' : 'navbar-items';
    const animationToName = target === 'header' ? 'moveToTop' : 'moveToLeft';
    const animationFromName = target === 'header' ? 'moveFromTop' : 'moveFromLeft';

    if (target === 'header') {
      if (this.isRetracted) {
        document.querySelector('.navbar-expand').classList.add('nav-expanded');
      } else {
        document.querySelector('.navbar-expand').classList.remove('nav-expanded');
      }
    }

    const navbarItems = document.getElementsByClassName(targetClass) as HTMLCollectionOf<HTMLElement>;

    navbarItems[0].style.animation = this.retracted ? '.4s ' + animationFromName : '.8s ' + animationToName;

    this.retracted = !this.retracted;
  }
}
