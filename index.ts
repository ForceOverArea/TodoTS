type stringArray = [string?];
let myTodos:stringArray = [];

function updateList():void {
    let todoList = ''; //reset the value of todoList before looping through the other values

    for(let todo of myTodos) {
        todoList += `
        <li> 
        ${todo} <input type="button" value="❌" 
        onclick="deleteTodo(${myTodos.indexOf(todo)});"> 
        </li>`
    }

    //add the <li>'s to the HTML
    document.querySelector('#todoList').innerHTML = todoList;

    //NOTE: find a better way to do this if one exists, this involves overriding TSC, which I didn't want to do
    let foo:any = document.querySelector('#myTodo');
    foo.value = '';
}

function addTodo(myTodo:string):void {

    console.log(myTodo);
    myTodos.push(myTodo);
    
    updateList(); //adds the generated html to the DOM
}

function deleteTodo(myTodo:number):void {
    myTodos.splice(myTodo, 1);

    updateList(); //remove the items no longer in the array
}