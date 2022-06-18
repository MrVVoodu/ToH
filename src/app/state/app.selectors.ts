import { createSelector } from '@ngrx/store';
import { AppState } from './app.state'

export const msgSelector = createSelector(
  (state: { appstate: AppState }) => state.appstate,
  (appstate: AppState) => appstate.messages
);

export const heroesSelector = createSelector(
  (state: { appstate: AppState }) => state.appstate,
  (appstate: AppState) => appstate.heroes
);

export const heroSelector = (fid: number) => createSelector(
  (state: { appstate: AppState }) => state.appstate,
  (appstate: AppState) => appstate.heroes.find((obj) => obj.id == fid)
);

export const dashHeroSelector = createSelector(
  (state: { appstate: AppState }) => state.appstate,
  (appstate: AppState) => appstate.heroes.slice(0, 4)
);

export const isLoggedInSelector = createSelector(
  (state: { appstate: AppState }) => state.appstate,
  (appstate: AppState) => appstate.isLogged
);