import { ActionReducerMap } from "@ngrx/store";

import { TodoModel } from "./Todos/Models/todo.model";
import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValidos } from './filtro/filtro.actions';
import { todoReducer } from "./Todos/todo.reducer";

export interface AppState {
    todosModule: TodoModel[],
    filtro: filtrosValidos
}

//confgiracion de todos los reducer de la aplicacion

export const AppReducers: ActionReducerMap<AppState> = {
    todosModule: todoReducer,
    filtro: filtroReducer
}