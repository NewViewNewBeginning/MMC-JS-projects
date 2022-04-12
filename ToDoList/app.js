//GLOBAL VARIABLES

let todoInput; //input where we can type in tasks
let errorInfo; //info about no content typed or tasks on list
let addBtn; //button for adding task to new list
let ulList; //tasks list
let newTodo; //new li/new task

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
};

// all events on our elements
const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addNewTodo);
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


// for reading all content before script run
document.addEventListener("DOMContentLoaded", main);

// const createTools = () => {
//     const div = document.createElement('div')
//     div.classList.add('tools')
//     newTodo.append(div)
//     const buttonCompl = document.createElement('button')
//     buttonCompl.classList.add('complete')
//     buttonCompl.innerHTML = '<i class="fas fa-check"></i>'
//     const btnEd = document.createElement('button')
//     btnEd.classList.add('edit')
//     const btnDel = document.createElement('button')
//     btnDel.classList.add('delete')
//     div.append(btnDel,btnEd,buttonCompl)
//     console.log(div)
//  }
