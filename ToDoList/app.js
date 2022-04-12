//GLOBAL VARIABLES

let todoInput; //input where we can type in tasks
let errorInfo; //info about no content typed or tasks on list
let addBtn; //button for adding task to new list
let ulList; //tasks list
let newTodo //new li/new task

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
    addBtn.addEventListener('click', addNewTodo)
};


const addNewTodo = () => { 
    if(todoInput.value !== ''){
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        ulList.append(newTodo)
        
        
    }else{
        errorInfo.textContent = "Please type in task"
    }

    
}


// for reading all content before script run
document.addEventListener("DOMContentLoaded", main);