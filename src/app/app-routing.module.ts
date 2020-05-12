import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {IncidentsComponent} from './components/incidents/incidents.component';

const routes: Routes = [
  {
    path: 'incidents',
    component: IncidentsComponent,
  },
  {
    path: 'notfound',
    component: NotfoundComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: '**',
    redirectTo: 'notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
