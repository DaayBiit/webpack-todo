
import { Todo, TodoList } from '../classes';
import '../css/componentes.css'

const todoList = new TodoList();
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

export const crearTodoHTML = (todo) => {

  const htmlTodo = `<li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
                      <div class="view">
                        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
                        <label>${todo.tarea}</label>
                        <button class="destroy"></button>
                      </div>
                      <input class="edit" value="Create a TodoMVC template">
                    </li> `;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
 
}

//Eventos
txtInput.addEventListener('keyup', (evento) => {
  
  if(evento.keyCode === 13 && txtInput.value.length > 0){
    console.log(txtInput.value);
    const nuevoTodo = new Todo(txtInput.value);
    
    todoList.nuevoTodo( nuevoTodo );
  
    crearTodoHTML(nuevoTodo);
    txtInput.value = '';
  }

})

divTodoList.addEventListener('click', (evento) => {
  
  const nombreElemento = evento.target.localName; // input, label, button
  const todoElemento = evento.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute('data-id');

  if( nombreElemento.includes('input')){
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle('completed')
  }else if (nombreElemento.includes('button')){
    todoList.eliminarTodo( todoId );
    divTodoList.removeChild(todoElemento);
  }else

  console.log('click sobre el elemento: ', nombreElemento);
  console.log(todoId);
  console.log('Todo List: ', todoList);

})

btnBorrar.addEventListener('click', () => {
  todoList.eliminarCompletado();

  for(let i = divTodoList.children.length - 1; i >= 0; i--){
    const elemento = divTodoList.children[i];
    console.log(elemento);
    if(elemento.classList.contains('completed')){
      divTodoList.removeChild(elemento);
    }
  }
})

ulFilters.addEventListener('click', (evento) => {
  const filtro = evento.target.text;
  if(!filtro){
    return;
  }

  anchorFilters.forEach(element => { 
    element.classList.remove('selected');
  });

  evento.target.classList.add('selected');
  
  for (const elemento of divTodoList.children) {
    console.log(elemento);
    elemento.classList.remove('hidden');
    const completado = elemento.classList.contains('completed');

    switch (filtro) {
      case 'Pendientes':
        if(completado){
          elemento.classList.add('hidden');
        }
        break;
      case 'Completados':
          if(!completado){
            elemento.classList.add('hidden');
          }
          break;
      default:
        break;
    }

  }
})