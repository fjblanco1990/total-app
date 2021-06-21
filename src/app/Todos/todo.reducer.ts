import { createReducer, on, props } from '@ngrx/store';
import { TodoModel } from './Models/todo.model';
import * as Action from "./todo.action";

export const estadoInicial: TodoModel[] = [
    new TodoModel('Salvar al mundo'),
    new TodoModel('Vencer a thanos'),
    new TodoModel('Comprar papas para Falcon'),
    new TodoModel('Robar el escudo del capitan america')
];

const  _todoReducer = createReducer( estadoInicial,
    on(Action.crear, (state, props) => [...state, new TodoModel(props.texto)]),
);

export function todoReducer (state:any, action:any) {
    return _todoReducer(state,action);
}