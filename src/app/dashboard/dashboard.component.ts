//import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../hero';

import { Store } from '@ngrx/store';
import { dashHeroSelector } from '../state/app.selectors';
import { AppState } from '../state/app.state';
import { getHeroes } from '../state/app.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes$: Observable<Hero[]>

  constructor(private store: Store<{ appstate: AppState }>) {
    this.heroes$ = store.select(dashHeroSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(getHeroes());
  }

}
