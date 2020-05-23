import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NavigationComponent} from '@components/navigation/navigation.component';
import {HeaderComponent} from '@components/header/header.component';
import {NotfoundComponent} from '@pages/notfound/notfound.component';
import {AcademyComponent} from '@components/academy/academy.component';
import {IncidentsModule} from '@pages/incidents/incidents.module';
import {ChartsModule} from 'ng2-charts';
import {PerformancesModule} from '@pages/performances/performances.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    NotfoundComponent,
    AcademyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IncidentsModule,
    ChartsModule,
    PerformancesModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
