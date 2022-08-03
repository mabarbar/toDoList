let input, addBtn, errorInfo, ulList;
// const completeToDo = document.querySelector(".complete");
// const editToDo = document.querySelector(".edit");
// const deleteToDo = document.querySelector(".delete");

// const popUpInfo = document.querySelector(".popup-info");
// const popUpInput = document.querySelector(".popup-input");
// const popUpBtnAccept = document.querySelector(".popup-btn .accept");
// const popUpBtnCancel = document.querySelector(".popup-btn .cancel");

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  input = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".todolist ul");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewTask);
  // listenery
};

const addNewTask = () => {
  if (input.value !== "") {
    const newTodo = document.createElement("li");
    newTodo.textContent = input.value;
    ulList.appendChild(newTodo);

    createToolsArea(newTodo);

    input.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Give me a task name";
  }
};

const createToolsArea = (newTodo) => {
  const tools = document.createElement("div");
  tools.classList.add("tools");

  const btnComplete = document.createElement("button");
  btnComplete.classList.add("complete");
  btnComplete.innerHTML = '<i class="fas fa-check"></i>';
  // const checkMark = document.createElement("i");
  // checkMark.classList.add("fas", "fa-check");
  // btnComplete.appendChild(checkMark);

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("edit");
  btnEdit.textContent = "EDIT";

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("delete");
  btnDelete.innerHTML = '<i class="fas fa-times"></i>';
  // const declineMark = document.createElement("i");
  // declineMark.classList.add("fas", "fa-times");
  // btnDelete.appendChild(declineMark);

  newTodo.appendChild(tools);
  tools.append(btnComplete, btnEdit, btnDelete);
  // tools.appendChild(btnComplete);
  // tools.appendChild(btnEdit);
  // tools.appendChild(btnDelete);
};

document.addEventListener("DOMContentLoaded", main);
