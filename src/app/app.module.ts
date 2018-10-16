import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './componentes/todo/todo.reducer';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Appreducers } from './app.reducer';

import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TodoItemComponent } from './componentes/todo/todo-item/todo-item.component';
import { TodoListComponent } from './componentes/todo/todo-list/todo-list.component';
import { TodoFooterComponent } from './componentes/todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './componentes/todo/todo-add/todo-add.component';
import { environment } from '../environments/environment';

///para validadcion de formularios
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './componentes/filter/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(Appreducers),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
