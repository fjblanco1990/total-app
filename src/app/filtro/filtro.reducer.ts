import { createReducer, on, props , Action} from '@ngrx/store';
import { filtrosValidos, SetFilter } from './filtro.actions';

export var estadoInicial:  filtrosValidos = 'todos';

const  _filtroReducer = createReducer<filtrosValidos, Action>( estadoInicial,
    on(SetFilter, (state, {filtro}) => filtro),

);

export function filtroReducer (state:any, action:any) {
    return _filtroReducer(state,action);
}