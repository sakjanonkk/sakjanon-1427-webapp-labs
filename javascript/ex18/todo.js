// get elements by id
const todoApp = document.getElementById("todo-app");
const todoInput = document.getElementById("todo-input");
const addTodo = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
// add task
addTodo.addEventListener("click", function () {
  var newTodo = document.createElement("li");
  newTodo.textContent = todoInput.value;
  newTodo.style.cursor = "pointer";
  newTodo.style.margin = "10px";
  todoList.appendChild(newTodo);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  newTodo.appendChild(deleteButton);

  todoInput.value = "";
});

// delete task
todoList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});
