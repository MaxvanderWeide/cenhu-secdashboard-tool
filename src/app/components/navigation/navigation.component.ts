import {Component, ElementRef, HostListener} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  constructor(private eRef: ElementRef) {
  }


  private retracted: boolean = true;

  @HostListener('document:click', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private toggleOnClick(event: any): void {
    if (this.eRef.nativeElement.contains(event.target) || (!this.eRef.nativeElement.contains(event.target) && !this.isRetracted)) {
      this.toggleRetracted('nav');
    }
  }

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

    navbarItems[0].style.animation = this.retracted ? '.4s ' + animationFromName : '.8s ' + animationToName;

    this.retracted = !this.retracted;
  }
}
