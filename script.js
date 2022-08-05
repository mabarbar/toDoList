let input,
  addBtn,
  errorInfo,
  ulList,
  popUp,
  popUpInfo,
  toDoToEdit,
  popUpInput,
  popUpAccept,
  popUpCancel;

// const popUpInfo = document.querySelector(".popup-info");
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

  popUp = document.querySelector(".popup");
  popUpInfo = document.querySelector(".popup-info");
  popUpInput = document.querySelector(".popup-input");
  popUpAccept = document.querySelector(".popup-btn.accept");
  popUpCancel = document.querySelector(".popup-btn.cancel");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewTask);
  addBtn.addEventListener("click", addNewTask);
  ulList.addEventListener("click", checkClick);
  popUpAccept.addEventListener("click", changeTaskName);
  popUpCancel.addEventListener("click", hidePopUp);

  input.addEventListener("keyup", checkEnter);

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
};

const editToDo = (e) => {
  toDoToEdit = e.target.closest("li");

  popUpInput.value = toDoToEdit.firstChild.textContent;
  popUp.classList.toggle("popup-visibility");
};

const hidePopUp = () => {
  popUp.classList.toggle("popup-visibility");
};

const changeTaskName = () => {
  if (popUpInput.value !== "") {
    toDoToEdit.firstChild.textContent = popUpInput.value;
    hidePopUp();
    popUpInput.value = "";
    popUpInfo.textContent = "";
  } else popUpInfo.textContent = "Musisz podać treść zadania!";
};

const deleteToDo = (e) => {
  toDoToDelete = e.target.closest("li");
  toDoToDelete.remove();
  if (popUp.classList.contains("popup-visibility")) hidePopUp();
  if (ulList.firstChild === null)
    errorInfo.textContent = "Brak zadań na liście";
};

const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    editToDo(e);
  } else if (e.target.matches(".delete")) {
    deleteToDo(e);
  }
};

const checkEnter = (e) => {
  if (e.key === "Enter") addNewTask();
};

document.addEventListener("DOMContentLoaded", main);
