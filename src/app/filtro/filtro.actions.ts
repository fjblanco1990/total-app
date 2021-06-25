import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const SetFilter = createAction(
    '[Filtro] Set Filter',
    props<{filtro: filtrosValidos}>()
);