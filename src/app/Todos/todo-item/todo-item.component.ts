import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TodoModel } from '../Models/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() {
    
  }

  ngOnInit(): void {

    this.todoInput.completado = true;

    this.chkCompletado = new FormControl(this.todoInput.completado);
    this.txtEditado = new FormControl(this.todoInput.texto, Validators.required);
  }

  // se realizo el coment desde develop


  Editar() {
    this.editando = true;

    setTimeout(() => {
       this.txtFisico.nativeElement.select();
    }, 1);
   
  }

  terminarEdicion() {
    this.editando= false;
  }
}
