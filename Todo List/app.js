const list = document.querySelector(".list");
const input = document.querySelector("input");

let todoList = [];
let todoInputValue = "";
let count = 0;

function onInputChange(event) {
  todoInputValue = event.target.value;
}

function addTodo() {
  if (!todoInputValue) {
    return;
  }
  todoList.push({
    id: count++,
    task: todoInputValue,
  });
  renderTodos();
  input.value = "";
  todoInputValue = "";
}

function deleteTodo(id) {
  todoList = todoList.filter((todo) => id !== todo.id);
  renderTodos();
}

function renderTodos() {
  list.innerHTML = todoList
    .map(
      (elem) => `<li>
${elem.task}
<button class="todo__delete" onclick="deleteTodo(${elem.id})">
  x
</button>
</li>
`
    )
    .join("");
}

renderTodos();
