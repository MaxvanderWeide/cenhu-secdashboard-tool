import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HeaderComponent} from './components/header/header.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {AcademyComponent} from './components/academy/academy.component';
import {IncidentsModule} from './incidents/incidents.module';
import { KeyperformancesComponent } from './pages/keyperformances/keyperformances.component';
import {ChartsModule} from 'ng2-charts';
import { PieComponent } from './components/charts/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    NotfoundComponent,
    AcademyComponent,
    KeyperformancesComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IncidentsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
