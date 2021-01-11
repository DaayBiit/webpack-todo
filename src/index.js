
import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';

import './styles.css';



const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHTML(todo));// cuando la funcion tenga un solo parametro, esto se puede simplicar: todoList.todos.forEach(crearTodoHTML);

//const newTodo = new Todo('Nuevo TODO');
//todoList.nuevoTodo(newTodo);
//newTodo.imprimirClase();
console.log(todoList);

/*
const tarea1 = new Todo('Terminar este curso!!');
todoList.nuevoTodo(tarea1);
console.log('Lista de tareas: ', todoList.todos);
crearTodoHTML(tarea1);
*/

//localStorage.setItem('mi-key', 'AB123456');
//sessionStorage.setItem('mi-key', 'AB123456');

/*
setTimeout(() => {
  localStorage.removeItem('mi-key');
}, 2000)
*/