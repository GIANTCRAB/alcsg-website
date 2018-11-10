import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app';
import {HomeComponent} from './components/home';
import {AboutComponent} from './components/home/about';
import {routes} from './routes';
import {SharedModule} from './components/shared/shared.module';
import {PrismicService} from './services/prismic';
import {PipeModule} from './pipes/pipe.module';
import {ContactComponent} from './components/home/contact';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipeModule,
    SharedModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PrismicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
