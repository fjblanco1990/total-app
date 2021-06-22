import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.redcuer';
import * as Actions from '../todo.action';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completados: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  CompletarTodo() {
    this.completados = !this.completados;
    
    this.store.dispatch(Actions.CompletarTodo({ completado: this.completados }));
  }
}
