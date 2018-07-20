import {Routes} from '@angular/router';
import {HomeComponent} from './components/home';
import {AboutComponent} from './components/home/about';
import {NotFoundComponent} from './components/shared/not-found';

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
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
