import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import * as AppActions from '../state/app.actions'

@Injectable()
export class HeroEffects {

    getHeroes$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.getHeroes),
        switchMap(() => this.heroService.getHeroes().pipe(
            map((heroes) => AppActions.loadHeroes({ heroes }))
        ))
    ));

    addHeroe$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.addHero),
        mergeMap((action) => this.heroService.addHero( action.name).pipe(
            map(() => AppActions.getHeroes()) //ALTERAR GET PARA FORA DO EFFECT DE ADD
        ))
    ));

    deleteHeroe$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.deleteHero),
        mergeMap((action) => this.heroService.deleteHero( action.id).pipe(
            map(() => AppActions.getHeroes()) //ALTERAR GET PARA FORA DO EFFECT DE ADD
        ))
    ));

    updateHeroe$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.updateHero),
        mergeMap((action) => this.heroService.updateHero( {id: action.id, name: action.newName} ).pipe(
            map(() => AppActions.getHeroes()) //ALTERAR GET PARA FORA DO EFFECT DE ADD
        ))
    ));

    constructor(
        private actions$: Actions,
        private heroService: HeroService
    ) { }
}