const textInput = document.querySelector("#todoInput");
const inputForm = document.querySelector(".inputForm");
const todoList = document.querySelector(".todoList__main");
const todoTask = document.querySelector(".todoList__foot__task");
todoTask.innerHTML = `You have ${todoList.childElementCount} pending tasks`;

const addBtn = document.querySelector(".input__btn");
const clearAllBtn = document.querySelector(".todoList__foot__clearBtn");

inputForm.addEventListener("submit", handleSubmit);
clearAllBtn.addEventListener("click", clickClearAll);

const todoArr = [];

function addToDo(newTodoItem) {
  const todoItem = document.createElement("div");
  todoItem.className = "todoList__main__item";
  todoItem.dataset.id = `${newTodoItem.id}`;
  todoItem.innerHTML = `<p class="todoList__main__item--text">${newTodoItem.text}</p>
  <button class="trash deleteBtn" data-id=${newTodoItem.id}>
      <i class="trash fa-solid fa-trash-can" data-id=${newTodoItem.id}></i>
  </button>`;
  todoList.append(todoItem);
  todoItem.addEventListener("click", deleteHandler);
  todoList.scrollTo(0, todoList.lastChild.getBoundingClientRect().y);
}

function ChangeTaskNum() {
  todoTask.innerHTML = `You have ${todoList.childElementCount} pending tasks`;
}

function handleSubmit(e) {
  e.preventDefault();
  if (textInput.value == undefined) {
    return;
  }
  const newTodoItem = {
    id: Date.now(),
    text: textInput.value,
  };
  addToDo(newTodoItem);
  ChangeTaskNum();
  textInput.value = " ";
}

function deleteHandler(event) {
  console.log(target);
  target.remove();
  // console.log(event.target.dataset.id);

  // } else {
  //   let todoItem = document.querySelector(
  //     `.todoList__main__item[data-id="${targetCount}"]`
  //   );
  //   console.log(todoItem);
  //   todoItem.remove();
}

function clickClearAll() {
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  ChangeTaskNum();
}
