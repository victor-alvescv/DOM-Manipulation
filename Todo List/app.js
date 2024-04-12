const list = document.querySelector(".list");
const input = document.querySelector("input");

let todoList = [];
let todoInputValue = "";
let counter = 0;

function onInputChange(event) {
  todoInputValue = event.target.value;
}

function addTodo() {
  const task = {
    id: counter++,
    task: todoInputValue,
  };
  if (todoInputValue === "") {
    return;
  } else {
    todoList.push(task);
    renderTodos();
    input.value = "";
    todoInputValue = "";
  }
}

function deleteTodo(id) {
  todoList = todoList.filter((todo) => {
    return todo.id !== id;
  });
  renderTodos();
}

function renderTodos() {
  list.innerHTML = todoList
    .map((elem) => {
      return `<li>
      ${elem.task}
      <button onclick="deleteTodo(${elem.id})" class="todo__delete">
        x
      </button>
    </li>`;
    })
    .join("");
}
