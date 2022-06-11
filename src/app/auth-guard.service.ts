import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  loggedIn: boolean = false;

  constructor() { }

  login(username: string, password: string) {
    if (username == 'sancho' && password == 'pancho') {
      this.loggedIn = true;
      alert('Login Succesfull');
    }
    else { this.loggedIn = false; }
  }

  logout() {
    this.loggedIn = false;
    alert('Logout Successful')
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  canActivate() {
    if (this.isLoggedIn()) {
      return true;
    }
    else { alert('Intruder Alert!'); return false }
  }
}
