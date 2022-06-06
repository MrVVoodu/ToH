//import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../hero';

import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { heroesSelector } from '../state/app.selectors';
import { getHeroes, addHero, deleteHero } from '../state/app.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>

  constructor(private store: Store<{ appstate: AppState }>) {
    this.heroes$ = store.select(heroesSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(getHeroes());
  }

  add(name: string): void {
    this.store.dispatch(addHero({name}));
  }

  delete(id: number): void {
    this.store.dispatch(deleteHero({id}));
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }
}
