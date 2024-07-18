const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(todoText) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${todoText}</span><button class="close">X</button>`;
    todoList.appendChild(li);

    const closeButton = li.querySelector('.close');
    closeButton.addEventListener('click', function() {
        li.remove();
    });
}
