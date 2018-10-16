import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { ToggleAllTodoAction } from './componentes/todo/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  completado =  false;

  constructor(private store: Store<AppState>) { }



  title = 'app';

  toggleAll() {  
    this.completado = !this.completado;
    const accion = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(accion); 
    console.log(this.completado)
  }
}
