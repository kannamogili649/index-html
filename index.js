let headingEl = document.getElementById("heading");
headingEl.textContent = "Hello World"

let todoList = [
    {
      text: "Learn HTML"
    },
    {
      text: "Learn CSS"
    },
    {
      text: "Learn JavaScript"
    }
  ];

function createAndAppendTodo (item){

    let liElement = document.createElement('li');
    document.getElementById('todoContainer').appendChild(liElement);
    liElement.classList.add('todo-item')
    liElement.id="todoItem"
    let inputEl = document.createElement('input');
    inputEl.type="checkbox"
    inputEl.id="checkbox"
    liElement.appendChild(inputEl);
    let labelContainerEl = document.createElement('div');
    liElement.appendChild(labelContainerEl);
    labelContainerEl.classList.add('label-container')
    let labelEl = document.createElement('label');
    labelContainerEl.appendChild(labelEl);
    labelEl.setAttribute('for', 'checkbox');
    labelEl.textContent=item.text;
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainerEl.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);

}

for(let item of todoList){
    createAndAppendTodo(item);
}