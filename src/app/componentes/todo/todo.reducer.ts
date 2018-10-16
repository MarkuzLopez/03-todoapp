import * as fromTodo from  './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Primer Estado');
const todo2 = new Todo('Segundo Estadp');
const todo3 = new Todo('Tercder estado');

todo1.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3 ]; /// arreglo de tipo:  Todo del modelo

export function todoReducer(state = estadoInicial,
                            action: fromTodo.Acciones): Todo[] { 

                    switch(action.type) { 
                    
                        case fromTodo.AGREGAR_TODO: 
                            const todo =  new Todo(action.texto);
                            return [...state, todo];
                        
                        case fromTodo.TOGGLE_TODO: 
                              return state.map(todoEdit => { 
                                  if(todoEdit.id === action.id)  {
                                      return { 
                                          ...todoEdit,
                                          completado: !todoEdit.completado
                                      };
                                  } else { 
                                      return todoEdit;
                                  }
                              });
                              
                        case fromTodo.TOGGLE_ALL_TODO: 
                            return state.map(todoEdit  => { 
                                return { 
                                    ...todoEdit,
                                    completado: action.completado
                                };
                            })
                        
                        case fromTodo.EDITAR_TODO: 

                                return state.map(editar =>{ 
                                    if(editar.id === action.id) { 
                                        return { 
                                            ...editar,                            
                                            texto: action.texto
                                        };
                                    } else  { 
                                        return editar
                                    }
                                })
                        
                        case fromTodo.BORRAR_ALL_TODO: 
                             return state.filter(todoEdit => { 
                                 !todoEdit.completado
                             });        
                        

                        case fromTodo.BORRAR_TODO: 
                            return state.filter(deletee => deletee.id !== action.id);                            

                            
                        default: 
                            return state;                            

                    }
        } 