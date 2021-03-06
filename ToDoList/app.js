//GLOBAL VARIABLES

let todoInput; //input where we can type in tasks
let errorInfo; //info about no content typed or tasks on list
let addBtn; //button for adding task to new list
let ulList; //tasks list
let newTodo; //new li/new task
let popup; // popup when edit clicked
let popupInfo; // popup info if empty value added
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

// adding all needed elements
const prepareDOMElements = () => {
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");
	popup = document.querySelector(".popup");
	popupInfo = document.querySelector(".popup-info");
	popupInput = document.querySelector(".popup-input");
	popupAddBtn = document.querySelector(".accept");
	popupCloseBtn = document.querySelector(".cancel");
};

// all events on our elements
const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addNewTodo);
	ulList.addEventListener("click", checkClick);
	popup.addEventListener("click", checkClick);
	popupCloseBtn.addEventListener("click", closePopup);
	popupAddBtn.addEventListener("click", addChange);
	todoInput.addEventListener("keyup", enterKeyCheck);
};

const addNewTodo = () => {
	if (todoInput.value !== "") {
		const tools = `<div class='tools'>
        <button class="complete"><i class="fas fa-check"></i></button>
        <button class="edit">EDIT</button>
        <button class="delete"><i class="fas fa-times"></i></button>
      </div>`;
		newTodo = document.createElement("li");
		newTodo.textContent = todoInput.value;
		ulList.append(newTodo);
		newTodo.insertAdjacentHTML("beforeend", tools);
		todoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "Please type in task";
	}
};

const checkClick = e => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		editTodo(e);
	} else if (e.target.matches(".delete")) {
		deleteTodo(e);
	}
};

const editTodo = e => {
	todoToEdit = e.target.closest("li");
	popupInput.value = todoToEdit.firstChild.textContent;

	popup.style.display = "flex";
};
const closePopup = () => {
	popup.style.display = "none";
	popupInfo.textContent = "";
};
const addChange = () => {
	if (popupInput.value !== "") {
		todoToEdit.firstChild.textContent = popupInput.value;
		popup.style.display = "none";
	} else {
		popupInfo.textContent = "You must type in something";
	}
};

const deleteTodo = e => {
	e.target.closest("li").remove();

	const allTodos = ulList.querySelectorAll("li");
	if (allTodos.length === 0) {
		errorInfo.textContent = "No tasks on the list.";
	}
	console.log(allTodos);
};

const enterKeyCheck = e => {
	if (e.key === "Enter") {
		addNewTodo();
	}
};

// for reading all content before script run
document.addEventListener("DOMContentLoaded", main);
