//import { MessageService } from '../message.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteMessages } from '../state/app.actions';
import { AppState } from '../state/app.state';
import { msgSelector } from '../state/app.selectors';

// let selector = createSelector(
//   (state: { count: AppState }) => state.count,
//   (messages: AppState) => messages.messages
// );

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages$: Observable<string[]>

  constructor(private store: Store<{ appstate: AppState }>) {
    this.messages$ = store.select(msgSelector);
  }

  ngOnInit(): void {
  }

  clear() {
    this.store.dispatch(deleteMessages());
  }

}





/** Log a HeroService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
  /*add(message: string) {
    this.store.dispatch(addMessage());
  }*/