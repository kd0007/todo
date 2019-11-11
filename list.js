var todos = ["Buy a new turtle"];
var input = prompt("What would you like to do");

while(input !== "quit") {
    if (input == "list" ){
        console.log(todos);
        listTodos();
    }else if (input == "new"){
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        addTodo();
     } else if (input == "delete"){
         deleteTodo();
     }

        
    

    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
    
    todos.forEach(function(todo,i){
        console.log(i + ": " + todo);
    });


}
function addTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo ");
}
function deleteTodo(){

    var index = prompt("Enter index of Todo to delete");
    todos.splice(index,1);
    console.log("Deleted Todo");
}
