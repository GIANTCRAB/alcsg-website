import {Routes} from '@angular/router';
import {NavigatorComponent} from './navigator';
import {EventsListComponent} from './list';

export const routes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: ':id',
    component: NavigatorComponent
  }
];
