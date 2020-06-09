import {Component, ElementRef, HostListener} from '@angular/core';
import {AppComponent} from '@app/app.component';

interface NavigationResource {
  name: string;
  resource: string;
  icon: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  constructor(private eRef: ElementRef) {
  }

  public retracted: boolean = true;
  navItems: NavigationResource[] = [
    {name: 'Incidents', icon: 'exclamation-circle', resource: '/dashboard/incidents'},
    {name: 'Academy', icon: 'codepen', resource: '/dashboard/academy'},
    {name: 'Reports', icon: 'eye', resource: '/dashboard/report'},
    {name: 'Departments', icon: 'cubes', resource: '/dashboard/departments'},
  ];

  @HostListener('document:click', ['$event'])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private toggleOnClick(event: any): void {
    if ((this.eRef.nativeElement.contains(event.target) ||
      (!this.eRef.nativeElement.contains(event.target) && !this.retracted)) && !AppComponent.isMobile()) {
      this.toggleRetracted('nav');

    }
  }

  public handleStopPropagation(event: MouseEvent): void {
    if (this.retracted && !AppComponent.isMobile()) {
      event.stopPropagation();
    }
    if (AppComponent.isMobile()) {
      this.toggleRetracted('header');
    }
  }

  public toggleRetracted(target: string): void {
    console.log(`Toggle Retract, called by: ${target}, with retracted set as: ${this.retracted}`);
    const targetClass: string = target === 'header' ? 'navbar-expand' : 'navbar-items';
    const animationToName: string = target === 'header' ? 'moveToTop' : 'moveToLeft';
    const animationFromName: string = target === 'header' ? 'moveFromTop' : 'moveFromLeft';

    const navbarItems: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(targetClass) as HTMLCollectionOf<HTMLElement>;

    navbarItems[0].style.animation = this.retracted ? '.6s ' + animationFromName : '.6s ' + animationToName;

    this.retracted = !this.retracted;
  }
}
