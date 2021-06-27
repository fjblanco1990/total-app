import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.redcuer';
import * as ActionsFiltros from '../../filtro/filtro.actions';
import * as ActionsTodo  from '../todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: ActionsFiltros.filtrosValidos = 'todos';

  filtrosHtml: ActionsFiltros.filtrosValidos[] = ['todos', 'completados', 'pendientes', ];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      //contar las tareas pendientes
      this.pendientes = state.todosModule.filter( filter => !filter.completado).length;
      
    })

  }

  Filtrar(filtroSeleccionado: ActionsFiltros.filtrosValidos) {
    this.store.dispatch(ActionsFiltros.EnviarFiltro({ filtro: filtroSeleccionado }));
  }

  limpiarCompletados() {
    this.store.dispatch(ActionsTodo.LimpiarCompletados());
  }

}
