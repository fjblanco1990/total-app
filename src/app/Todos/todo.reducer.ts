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
    on(Action.Completado, (state, props) => {
        return state.map( todo => {
            if (todo.id === props.id) {
               return {
                   ...todo,
                   completado: !todo.completado
               }
            } else {
                return todo;
            }
        } );
    }),
    on(Action.Editar, (state, props) => {
        return state.map( todo => {
            if (todo.id === props.id) {
               return {
                   ...todo,
                   texto: props.text
               }
            } else {
                return todo;
            }
        } );
    }),
    on(Action.Eliminar, (state, props) =>  state.filter(todoFilter => todoFilter.id !== props.id)),
    on(Action.CompletarTodo, (state, props) => {
        return state.map( todo => { // genera un nuevo arreglo
               return {
                 ...todo,
                 completado: props.completado
               }
        } );
    } )
);

export function todoReducer (state:any, action:any) {
    return _todoReducer(state,action);
}