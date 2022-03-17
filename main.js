const textInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todoList__main");
const todoTask = document.querySelector(".todoList__foot__task");
todoTask.innerHTML = `You have ${todoList.childElementCount} pending tasks`;

const addBtn = document.querySelector(".input__icon");
const clearAllBtn = document.querySelector(".todoList__foot__clearbtn");

let idCount = 0;

function addToDo(text) {
  const todoItem = document.createElement("div");
  todoItem.className = "todoList__main__item";
  todoItem.dataset.id = `${idCount}`;
  todoItem.innerHTML = `<p class="todoList__main__item--text">${text}</p>
  <button class="trash deleteBtn" data-id=${idCount}>
      <i class="trash fa-solid fa-trash-can" data-id=${idCount}></i>
  </button>`;
  todoList.append(todoItem);
  idCount++;
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

todoList.addEventListener("click", (event) => {
  let tagName = event.target.tagName;
  let targetCount = event.target.dataset.id;

  let data = event.target.dataset;
  if (tagName !== "BUTTON" && tagName !== "I") {
    return;
  } else {
    let todoItem = document.querySelector(
      `.todoList__main__item[data-id="${targetCount}"]`
    );
    todoItem.remove();
  }
});

clearAllBtn.addEventListener("click", (event) => {
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
  ChangeTaskNum();
});
