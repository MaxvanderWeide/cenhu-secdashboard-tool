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
    const targetClass: string = target === 'header' ? 'navbar-expand' : 'navbar-items';
    const animationToName: string = target === 'header' ? 'moveToTop' : 'moveToLeft';
    const animationFromName: string = target === 'header' ? 'moveFromTop' : 'moveFromLeft';

    if (target === 'header') {
      if (this.isRetracted) {
        document.querySelector('.navbar-expand').classList.add('nav-expanded');
      } else {
        document.querySelector('.navbar-expand').classList.remove('nav-expanded');
      }
    }

    const navbarItems: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(targetClass) as HTMLCollectionOf<HTMLElement>;

    navbarItems[0].style.animation = this.retracted ? '.4s ' + animationFromName : '.4s ' + animationToName;

    this.retracted = !this.retracted;
  }
}
