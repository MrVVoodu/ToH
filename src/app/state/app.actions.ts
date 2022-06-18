import { createAction, props } from '@ngrx/store';
import { Hero } from '../hero';

export const deleteMessages = createAction('[Messages] Delete Log Messages');
export const getHeroes = createAction('[Heroes] Get Heroes');
export const loadHeroes = createAction('[Heroes] Load Heroes', props<{ heroes: Hero[]}>());
export const addHero = createAction('[Heroes] Add Hero', props<{ name: string }>() );
export const updateHero = createAction('[Heroes] Update Hero', props<{ id: number,newName: string }>() );
export const getHero = createAction('[Hero-Detail] Get Hero', props<{ id: number }>() );
export const deleteHero = createAction('[Hero-Detail] Delete Hero', props<{ id: number }>() );
export const logIn = createAction('[Login] Logged In');
export const logOut = createAction('[Logout] Logged Out');
//export const searchHero = createAction('[Dashboard] Search a Hero by name', props<{ name: string }>() );
//export const chooseHero = createAction('[Dashboard/Heroes] View Hero Details', props<{ id: number }>() );
// export const dashboardClick = createAction('[APP] Show Dashboard');
// export const heroesClick = createAction('[APP] Show Heroes');
// export const goBack = createAction('[Hero-Detail] Go Back');