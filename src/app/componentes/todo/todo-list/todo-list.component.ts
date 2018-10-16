import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(estado => { 
      this.todos = estado.todos;
      this.filtro = estado.filtro;
      console.log(estado)
    })
  }

}
