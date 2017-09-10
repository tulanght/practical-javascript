// Ver01 Arrays
todos = ["item 1", "item 2", "item 3", "item 4", "item 5"];

function displayTodos(){
  console.log('My Todos:', todos);
}

function addTodo(newItem){
  todos.push(newItem);
  displayTodos();
}

function changeTodo(position, newValue){
  todos[position] = newValue;
  displayTodos();
}

function deleteTodo(position){
  todo.splice(position, 1);
}