const textInput = document.querySelector("#todoInput");
const todoList = document.querySelector(".todoList__main");
const todoTask = document.querySelector(".todoList__foot__task");
todoTask.innerHTML = `You have ${todoList.childElementCount} pending tasks`;

const addBtn = document.querySelector(".input__icon");
const clearAllBtn = document.querySelector(".todoList__foot__clearbtn");

function addToDo(text) {
  const todoItem = document.createElement("div");
  const todoItemText = document.createElement("p");
  const todoItemIcon = document.createElement("i");
  todoItem.className = "todoList__main__item";
  todoItemText.className = "todoList__main__item--text";
  todoItemIcon.className = "fa-solid fa-trash-can trash";
  todoItem.append(todoItemText, todoItemIcon);
  todoList.append(todoItem);
  todoItemText.textContent = text;
  let removeBtn = document.querySelectorAll(".trash");
  removeBtn.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.target.parentElement.remove();
      ChangeTaskNum();
    });
  });
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

// `<div class="todoList__main__item">
// <p class="todoList__main__item--text">히히</p><i class="fa-solid fa-trash-can trash"></i>
// </div>`;

// 인풋을 넣으면 html 요소를 추가해주는 이벤트 1(인풋)

// trash 버튼을 누르면 해당 요소를 삭제

// 요소의 수에 따라 할 일 체크

// clearAll누르면 모든 자식 요소 삭제

textInput.addEventListener("change", handleInput);
//   document.querySelector(".todoList__main__item--text").innerHTML = text;

clearAllBtn.addEventListener("click", () => {
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
});
