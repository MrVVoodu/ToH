import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authGuardService: AuthGuardService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  username: string = '';
  password: string = '';
  retUrl: string | null = "home";

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => { this.retUrl = params.get('retUrl') });
  }



  onFormSubmit(loginForm: { value: { username: string; password: string; }; }) {
    this.authGuardService.login(loginForm.value.username, loginForm.value.password)
    this.authGuardService.canActivate();
  }

  logout() {
    this.authGuardService.logout();
  }

}
