import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import * as AppActions from './app.actions';

export const initialState: AppState = {
  heroes: [],
  messages: ['App Started...'],
  isLogged: false
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.deleteMessages, (state) => ({...state, messages: []})),
  on(AppActions.loadHeroes, (state, {heroes}) => ({...state, messages: [...state.messages,'Heroes Fetched ' + 'using effects'], heroes: heroes })),
  on(AppActions.addHero, (state, { name }) => ({...state, messages: [...state.messages,'Hero "'+name+'" added']})),
  on(AppActions.deleteHero, (state, { id }) => ({...state, messages: [...state.messages,'Hero with id: '+id+' deleted']})),
  on(AppActions.logIn, (state) => ({...state, messages: [...state.messages,'Logging In'], isLogged: true})),
  on(AppActions.logOut, (state) => ({...state, messages: [...state.messages,'Logging Out'], isLogged: false})),
  //on(AppActions.addMessage, (state) => ({...state, messages: }))

  //on(AppActions.chooseHero, (state) => ({...state, messages: []}))
);