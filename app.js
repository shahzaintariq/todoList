const todoListEl = document.querySelector('.todo__list');
const todoInputEl = document.querySelector('.todo__input');

todoInputEl.addEventListener('keyup',(event) => {
    if(event.keyCode === 13){
        addTodo(todoInputEl.value)
        todoInputEl.value = ''
        deleteItem()
    }
})

function deleteItem(){
    const todoItemEl = document.querySelectorAll('.todo__item');
    for(i=0; i<todoItemEl.length; i++){
        todoItemEl[i].addEventListener('click',(event)=>{
            event.target.className += ' done';
        })
    }
}

function addTodo(item){
    todoListEl.innerHTML += `<li class="todo__item">${item}</li>`;
}
