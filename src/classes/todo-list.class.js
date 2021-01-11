import { Todo } from ".";

export class TodoList {

  constructor() {
    //this.todos = [];
    this.cargarLocalStorage();
  }


  nuevoTodo(todo){
    this.todos.push(todo);
    this.guardarLocalStorage(this.todos);
  }

  eliminarTodo(id){

    this.todos = this.todos.filter( todo => todo.id != id );
    this.guardarLocalStorage(this.todos);

  }

  marcarCompletado(id) {

    for(const todo of this.todos){

      if(todo.id == id){

        todo.completado = !todo.completado;

      }

    }

  }

  eliminarCompletado(){
    this.todos = this.todos.filter( todo => !todo.completado );
    this.guardarLocalStorage(this.todos);
  }

  guardarLocalStorage(){
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  cargarLocalStorage(){
    if(localStorage.getItem('todo')){
      this.todos = JSON.parse(localStorage.getItem('todo'));
    }else{
      this.todos = [];
    }
    this.todos = this.todos.map(obj => Todo.fromJson(obj));// se puede escribir de esta forma:  this.todos.map(Todo.fromJson)
  }

}