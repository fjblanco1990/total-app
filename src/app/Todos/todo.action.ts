import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TODO] Crear Todo',
    props<{texto: string}>()
);

export const Completado = createAction(
    '[TODO] Completado Todo',    
    props<{ id: number }>()
);

export const Editar = createAction(
    '[TODO] Editar Todo',    
    props<{ id: number, text: string}>()
);

export const CompletarTodo = createAction(
    '[TODO] Completar todo',
    props<{ completado: boolean }>()
);

export const Eliminar = createAction(
    '[TODO] Eliminar Todo',
    props<{ id: number }>()   
);