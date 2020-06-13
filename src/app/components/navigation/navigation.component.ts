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
    if (localStorage.getItem('theme') === 'theme-dark') {
      document.body.classList.add('theme-dark');
    } else {
      localStorage.setItem('theme', 'theme-light');
    }
  }

  public retracted: boolean = true;
  navItems: NavigationResource[] = [
    {name: 'Dashboard', icon: 'bar-chart-o', resource: '/home'},
    {name: 'Incidents', icon: 'exclamation-circle', resource: '/dashboard/incidents'},
    {name: 'Departments', icon: 'group', resource: '/dashboard/departments'},
    {name: 'Reports', icon: 'envelope-o', resource: '/dashboard/report'},
    {name: 'Academy', icon: 'graduation-cap', resource: '/dashboard/academy'},
    {name: 'Projects*', icon: 'folder-o', resource: '/dashboard/projects'},
    {name: 'Datasec*', icon: 'shield', resource: '/dashboard/datasec'},
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

  public toggleThemeMode(): void {
    if (localStorage.getItem('theme') === 'theme-light') {
      document.body.classList.add('theme-dark');
      localStorage.setItem('theme', 'theme-dark');
    } else if (localStorage.getItem('theme') === 'theme-dark') {
      document.body.classList.remove('theme-dark');
      localStorage.setItem('theme', 'theme-light');
    } else {
      localStorage.setItem('theme', 'theme-light');
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
