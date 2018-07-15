import {Routes} from '@angular/router';
import {HomeComponent} from './components/home';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'events',
    loadChildren: './components/events/events.module#EventsModule'
  }
];
