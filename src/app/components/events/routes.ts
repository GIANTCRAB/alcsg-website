import {Routes} from '@angular/router';
import {NavigatorComponent} from './navigator';

export const routes: Routes = [
  {
    path: 'events/:id',
    component: NavigatorComponent
  }
];
