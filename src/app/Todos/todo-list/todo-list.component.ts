import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.redcuer';
import { TodoModel } from '../Models/todo.model';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todosVariable: TodoModel[] = [];


  filtroActual: filtrosValidos = 'todos';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //lo que esta en select('todos') es la prop que esta dentro de la interfaz de AppState
    // this.store.select('todosModule').subscribe( variable => this.todosVariable = variable);

    // Sin desestrcuturacion
    // this.store.subscribe( variable => { 
    //   this.todosVariable = variable.todosModule;
    //   this.filtroActual = variable.filtro;
    // })

    //Con desestructuracion
    this.store.subscribe( ({todosModule, filtro}) => { 
      this.todosVariable = todosModule;
      this.filtroActual = filtro;
    })
  }

}
