import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ToggleAction, EditarTodoAction, BorrarAction } from '../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  chkFiedl: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.chkFiedl = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    console.log('item =>', this.todo);

    this.chkFiedl.valueChanges.subscribe( valor => { 
      console.log('Valor check', valor);
      const accion = new ToggleAction(this.todo.id);
      this._store.dispatch(accion);
    });
      
  }

  editar() { 
    this.editando = true;
  
    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
    }, 1)
  }

  terminarEdicion() { 
    this.editando = false;
    if(this.txtInput.invalid) { 
      return;
    }

    if(this.txtInput.value === this.todo.texto)  { 
      return;
    }

    const accion = new EditarTodoAction(this.todo.id, this.txtInput.value);
    console.log('Acciomes =>' , accion);
    this._store.dispatch(accion)
  } 

  deletee() { 
    const accion = new BorrarAction(this.todo.id);
    this._store.dispatch(accion);

  }

}
