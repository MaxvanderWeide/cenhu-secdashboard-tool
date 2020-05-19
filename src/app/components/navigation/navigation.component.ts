import {Component} from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  public get isRetracted(): boolean {
    return this.retracted;
  }

  private retracted: boolean = true;

  mini = true;

  public toggleRetracted(): void {
    this.retracted = !this.retracted;
  }

  public toggleSidebar() {
    if (this.mini) {
      console.log('opening sidebar');
      document.getElementById('mySidebar').style.width = '250px';
      this.mini = false;
    } else {
      console.log('closing sidebar');
      document.getElementById('mySidebar').style.width = '85px';
      this.mini = true;
    }
  }
}
