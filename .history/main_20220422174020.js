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
  todoItem.setAttribute("class", "todoList__main__item");
  todoItem.setAttribute("dataset-id", `${newTodoItem.id}`);

  const item = document.createElement("p");
  item.setAttribute("class", "todoList__main__item--text");
  item.innerText = `${newTodoItem.text}`;

  const button = document.createElement("button");
  button.setAttribute("class", "trash deleteBtn");
  button.addEventListener("click", () => {
    todoList.removeChild(todoItem);
  });

  const i = document.createElement("i");
  i.setAttribute("class", "trash fa-solid fa-trash-can");

  todoItem.append(item);
  todoItem.append(deleteBtn);

  todoList.append(todoItem);
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
  if (event.target.className !== "trash") {
    return;
  }
  event.target.parentElement.remove();
  // target.remove();
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
