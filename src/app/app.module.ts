import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HeaderComponent} from './components/header/header.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {IncidentsComponent} from './components/incidents/incidents.component';
import {AcademyComponent} from './components/academy/academy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    NotfoundComponent,
    IncidentsComponent,
    AcademyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
