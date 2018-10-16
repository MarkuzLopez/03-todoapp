import { Todo } from '../app/componentes/todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from '../app/componentes/todo/todo.reducer';
import * as fromFiltro from '../app/componentes/filter/filter.reducers';

import * as fromFiltroActions from '../app/componentes/filter/filter.actions';

export interface AppState { 
    todos: Todo[];
    filtro: fromFiltroActions.filtroValidos
}

export const Appreducers: ActionReducerMap<AppState>  = { 
    todos:  fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer
}