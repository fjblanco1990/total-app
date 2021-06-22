import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TodoModel } from '../Models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.redcuer';
import * as Actions from '../todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoInput!: TodoModel;
  @ViewChild('inputFisico') txtFisico!: ElementRef

  chkCompletado: FormControl = new FormControl;
  txtEditado: FormControl = new FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit(): void {

    this.chkCompletado = new FormControl(this.todoInput.completado);
    this.txtEditado = new FormControl(this.todoInput.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe( valor => {
        this.store.dispatch(Actions.Completado({id: this.todoInput.id }));
    })
  }

  // se realizo el coment desde develop

  Editar() {
    this.editando = true;
    this.txtEditado.setValue(this.todoInput.texto);
    setTimeout(() => {
       this.txtFisico.nativeElement.select();
    }, 1);
   
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtEditado.invalid) { return; }
    if (this.txtEditado.value === this.todoInput.texto) { return; }

    this.store.dispatch(Actions.Editar({id: this.todoInput.id, text: this.txtEditado.value}));
  }

  EliminarTarea() {
    this.store.dispatch(Actions.Eliminar({id: this.todoInput.id}));
  }

  
}
