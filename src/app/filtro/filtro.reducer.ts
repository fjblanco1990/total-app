import { createReducer, on, props , Action} from '@ngrx/store';
import { filtrosValidos, EnviarFiltro } from './filtro.actions';

export var estadoInicial:  filtrosValidos = 'todos';

const  _filtroReducer = createReducer<filtrosValidos, Action>( estadoInicial,
    on(EnviarFiltro, (state, {filtro}) => filtro),

);

export function filtroReducer (state:any, action:any) {
    return _filtroReducer(state,action);
}