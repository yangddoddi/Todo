const textInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todoList__main");
const todoTask = document.querySelector(".todoList__foot__task");
todoTask.innerHTML = `You have ${todoList.childElementCount} pending tasks`;

const addBtn = document.querySelector(".input__icon");
const clearAllBtn = document.querySelector(".todoList__foot__clearbtn");

function addToDo(text) {
  const todoItem = document.createElement("div");
  const todoItemText = document.createElement("p");
  const deleteBtn = document.createElement("i");
  todoItem.className = "todoList__main__item";
  todoItemText.className = "todoList__main__item--text";
  deleteBtn.className = "fa-solid fa-trash-can trash";
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(todoItem);
    ChangeTaskNum();
  });
  todoItem.append(todoItemText, deleteBtn);
  todoList.append(todoItem);
  todoItemText.textContent = text;
  todoList.scrollTo(0, todoList.lastChild.getBoundingClientRect().y);
}

function ChangeTaskNum() {
  todoTask.innerHTML = `You have ${todoList.childElementCount} pending tasks`;
}

function handleInput(e) {
  if (textInput.value == undefined) {
    return;
  }
  addToDo(textInput.value);
  ChangeTaskNum();
  textInput.value = " ";
}

textInput.addEventListener("change", handleInput);

clearAllBtn.addEventListener("click", () => {
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  ChangeTaskNum();
});
