import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logIn, logOut } from '../state/app.actions';
import { isLoggedInSelector } from '../state/app.selectors';
import { AppState } from '../state/app.state';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<{ appstate: AppState }>) {
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void {
    if (loginForm.value.username == 'sancho' && loginForm.value.password == 'pancho') {
      alert('Login Successfull')
      this.store.dispatch(logIn());
    }
    else {
      loginForm.reset();
      alert('Intruder Alert!');
    }
  }

  logout() {
    alert('Logout Successfull')
    this.store.dispatch(logOut())
  }

}
