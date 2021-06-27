import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from './Models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todoModel: TodoModel[], filtro: filtrosValidos): TodoModel[] {
    // console.log(value);

    switch (filtro) {
      case 'completados':
          return todoModel.filter( filter => filter.completado);
      case 'pendientes':
          return todoModel.filter( filter => !filter.completado);
      case 'pendientes':
            return todoModel.filter( filter => !filter.completado);
      default:
        return todoModel
        break;
    }
    
  }

}
