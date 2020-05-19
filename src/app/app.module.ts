import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HeaderComponent} from './components/header/header.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {AcademyComponent} from './components/academy/academy.component';
import {IncidentsModule} from './incidents/incidents.module';
import {KpiComponent} from './components/kpi/kpi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    NotfoundComponent,
    AcademyComponent,
    KpiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IncidentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
