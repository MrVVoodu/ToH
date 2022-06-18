import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap, tap } from 'rxjs';
import { isLoggedInSelector } from './state/app.selectors';
import { AppState } from './state/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private store: Store<{ appstate: AppState }>) { };

  ngOnInit() {
  }

  // canActivate() {
  //   if (this.isLogged$?.pipe(map(x=>x))) {
  //     console.log('isLogged is true: '+this.isLogged$.pipe(tap(x=>console.log(x))));
  //     return true;
  //   }
  //   else {
  //     alert('Alert, Intruder!');
  //     console.log('isLogged is false: ');//+this.isLogged$.pipe(tap(x=>console.log(x))));
  //     return false;
  //   }
  // }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.store.select(isLoggedInSelector).pipe(
        map((auth)=> {
          if (auth) {
            alert('canActivate granted access');
            return true;
          }
          else {
            alert('canActivate denied access');
            return false;
          }
        })
      )
    
  }

}
