import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigatorComponent} from './navigator';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NavigatorComponent]
})
export class EventsModule {
}
