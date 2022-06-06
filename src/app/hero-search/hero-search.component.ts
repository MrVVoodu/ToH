import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, of, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { Hero } from '../hero';
import { AppState } from '../state/app.state';
import { heroesSelector } from '../state/app.selectors'

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private store: Store<{ appstate: AppState }>) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.store.select(heroesSelector).pipe(
      tap(x => x.length ?
        console.info(`found heroes matching "${term}"`) :
        console.info(`no heroes matching "${term}"`))
    );
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchHeroes(term)),
    );
  }
}