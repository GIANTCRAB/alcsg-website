import {RouterReducerState} from '@ngrx/router-store';

export interface AppState {
  router?: RouterReducerState;
}

export const INITIAL_APP_STATE: AppState = {
};
