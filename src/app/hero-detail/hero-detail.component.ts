import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { heroSelector } from '../state/app.selectors';
import { AppState } from '../state/app.state';
import { updateHero } from '../state/app.actions';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$?: Observable<Hero|undefined>

  

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<{ appstate: AppState }>
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero$ = this.store.select(heroSelector(id));
    }

  goBack(): void {
    this.location.back();
  }

  save(id: number, newName: string): void {
    if (this.hero$) {
      this.store.dispatch(updateHero({id,newName}))
      this.goBack();
    }
  }

}
