let todotext = document.getElementById("todotext");
let preview = document.getElementById("preview")
let addbtn = document.getElementById("addbtn")
let todolist = document.getElementById("todolist")


todotext.addEventListener("input", function(){
    console.log(this.value)
})

todotext.addEventListener("input", function(){
    preview.innerHTML= (this.value)
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
random();
addbtn.addEventListener("click",function(e){
    e.preventDefault();
    const newTodoText  = todotext.value;
    const newLi = document.createElement('li');
    const newLiInnerHtml =  `<div  class="d-flex border mb-2  bg-gradient bg-opacity-75" style="justify-content: space-between; background-color: ${random()}" >
    <span class="text text-white">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>
    </div>`
    newLi.innerHTML = newLiInnerHtml;
    todolist.append(newLi);
    todotext.value = ''
})