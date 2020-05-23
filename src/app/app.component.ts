import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private auth: boolean = true;

  public get isAuthenticated(): boolean {
    return this.auth;
  }
}
