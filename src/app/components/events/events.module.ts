import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigatorComponent} from './navigator';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {SharedModule} from '../shared/shared.module';
import {EventsListComponent} from './list';
import {PipeModule} from '../../pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    PipeModule
  ],
  declarations: [
    NavigatorComponent,
    EventsListComponent
  ]
})
export class EventsModule {
}
