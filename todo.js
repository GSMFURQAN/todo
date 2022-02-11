const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");


todoForm.addEventListener("submit", (e)=>{
    // e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = 
    `<span class="text ">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML= newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
    newLi.style.backgroundColor = random();
});

todoList.addEventListener("click", (e)=>{
    console.log(e.target);
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    };
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    };

});

function random(){
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);
    var bgcolor = "rgb("+x+","+y+","+z+")";
    // document.body.style.background = bgcolor;
    console.log(bgcolor);
    return bgcolor;
}


