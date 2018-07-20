import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {NavbarComponent} from './navbar';
import {FooterComponent} from './footer';
import {LoadingComponent} from './loading';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FontAwesomeModule,
    NavbarComponent,
    FooterComponent,
    LoadingComponent
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class SharedModule {
}
