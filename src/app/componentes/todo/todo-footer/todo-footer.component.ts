import { Component, OnInit } from '@angular/core';
import * as fromTodo from  '../todo.actions';

import * as fromFiltro from '../../filter/filter.actions';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos: fromFiltro.filtroValidos [] =['todos', 'completados', 'pendientes'] 
  filtroActual:  fromFiltro.filtroValidos;

  constructor(private store: Store<AppState>) { }
 
  ngOnInit() {
    this.store.subscribe( stado => { 
      this.filtroActual = stado.filtro;
      this.contarPendientes(stado.todos);
    })
  }
  
  cambiarFiltro(filtro: any) { 
    const acccion = new fromFiltro.SetFiltroAction(filtro);
    this.store.dispatch(acccion);
  }
 
  contarPendientes(todo: Todo[]) { 
    this.pendientes = todo.filter( todo => !todo.completado).length;

  }

  limpiarTodo() { 
    const accion= new fromTodo.BorrarAllTodoAction();
    this.store.dispatch(accion);

  }

}
