import {Routes} from '@angular/router';
import {HomeComponent} from './components/home';
import {AboutComponent} from './components/home/about';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    loadChildren: './components/events/events.module#EventsModule'
  }
];
