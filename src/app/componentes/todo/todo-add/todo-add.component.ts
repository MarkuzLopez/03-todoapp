import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { AgregarTodoAction } from '../todo.actions';
import * as fromTodo from  '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  
  txtInput: FormControl;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);     
  }

  agegarTodo() { 
    console.log('Valor ',this.txtInput.value);
    console.log('Valid ', this.txtInput.valid);    
    if(this.txtInput.invalid) { 
      return;
    }

    const accion = new fromTodo.AgregarTodoAction(this.txtInput.value);
    this._store.dispatch(accion);
    
    this.txtInput.setValue('');
     
  }

}
