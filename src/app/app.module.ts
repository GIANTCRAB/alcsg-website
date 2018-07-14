import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {INITIAL_APP_STATE} from './app-state';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app';
import {HomeComponent} from './components/home';
import {routes} from './routes';
import {SharedModule} from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers, {initialState: INITIAL_APP_STATE}),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
