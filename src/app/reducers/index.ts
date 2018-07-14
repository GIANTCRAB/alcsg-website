import {routerReducer} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../app-state';

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};
