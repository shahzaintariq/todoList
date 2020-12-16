const todoListEl = document.querySelector('.todo__list');
const todoInputEl = document.querySelector('.todo__input');

todoInputEl.addEventListener('keyup',(event) => {
    if(event.keyCode === 13){
        todoListEl.insertBefore(addTodo(todoInputEl.value),todoListEl.childNodes[0]);
        todoInputEl.value = ''
        // deleteItem()
    }
})

/* THIS FUNCTIONS WORKS BUT NOT A GOOD PRACTICE*/
// function deleteItem(){
//     const todoItemEl = document.querySelectorAll('.todo__item');
//     for(i=0; i<todoItemEl.length; i++){
//         todoItemEl[i].addEventListener('click',(event)=>{
//             event.target.className += ' done';
//         })
//     }
// }

function toggleDone() {
    todoListEl.addEventListener('click',(e) => {
        if(e.target.classList.contains('todo__item')){
            e.target.classList.toggle('done');    
        }
    })
}

toggleDone()

function addTodo(item){
    const newListElem = document.createElement('li');
    newListElem.textContent = item;
    newListElem.setAttribute('class', 'todo__item');
    return newListElem;
}
