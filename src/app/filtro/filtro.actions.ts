import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const EnviarFiltro = createAction(
    '[Filtro] Set Filter',
    props<{filtro: filtrosValidos}>()
);

