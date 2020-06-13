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
    {name: 'Dashboard', icon: 'tachometer', resource: '/home'},
    {name: 'Incidents', icon: 'exclamation-circle', resource: '/dashboard/incidents'},
    {name: 'Academy', icon: 'codepen', resource: '/dashboard/academy'},
    {name: 'Reports', icon: 'eye', resource: '/dashboard/report'},
    {name: 'Departments', icon: 'cubes', resource: '/dashboard/departments'},
    {name: 'Projects*', icon: 'clipboard', resource: '/dashboard/projects'},
    {name: 'Datasec*', icon: 'database', resource: '/dashboard/datasec'},
  ];

  @HostListener('document:click', ['$event'])
  private toggleOnClick(event: MouseEvent): void {
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
    const targetClass: string = target === 'header' ? 'navbar-expand' : 'navbar-items';
    const animationToName: string = target === 'header' ? 'moveToTop' : 'moveToLeft';
    const animationFromName: string = target === 'header' ? 'moveFromTop' : 'moveFromLeft';

    const navbarItems: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(targetClass) as HTMLCollectionOf<HTMLElement>;

    navbarItems[0].style.animation = this.retracted ? '.6s ' + animationFromName : '.6s ' + animationToName;

    this.retracted = !this.retracted;
  }
}
