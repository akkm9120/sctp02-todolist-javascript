const todos = [
    {
        "id": 123,
        "name": "Walk the dog",
        "urgency": 2
    },
    {
        "id": 234,
        "name": "Wash the car",
        "urgency": 1
    },
    {
        "id": 456,
        "name": "Clean the Toilet",
        "urgency": 3
    },


];

const prompt = require('prompt-sync')();

function displayTodos(todos){
    console.log("To Do List") 
    
    for(let task of todos){
        console.log(`
            TaskID : ${task.id}
            Name: ${task.name}
            Urgecy: ${task.urgency}`)
    }
}
////////////////////////////////////////////////////////////////////
function displayCreateTodo(todos){
    const name = prompt("Enter the name of the Task : ");
    const urgency = parseInt(prompt("Enter the urgency (1 to 5): "));
    createTodos(todos, name, urgency)
}

function createTodos(todos,name,urgency){   
    const newtask = {
        "id": Math.floor(Math.random()*100000),
        "name": name,
        "urgency": urgency,
        "done": false
    }
    todos.push(newtask);
}
///////////////////////////////////////////////////////////////////////

function displayUpdateTodos(todos){
    displayTodos(todos);
    const id = parseInt(prompt('Enter the ID of the task to modify: '))

    //linear search to get the obj we want to modify
    let wantedTodo = null;
    for(let todo of todos){
        if(todo.id == id){
            wantedTodo=todo;
            break;
        }
    }
    if(wantedTodo){
    const newName = prompt("enter new Todo name or Press enter to remain smae name : ",wantedTodo.name);
    const newUrgency = parseInt(prompt("Enter new urgency or press enter to remain the same : ",wantedTodo.urgency));
    updateTodo(todos,id,newName,newUrgency);
} else {console.log('No Todo with entered ID exists.')}
}

function updateTodo(todos,id, newName , newUrgency){
    let wantedTodo = null;
    for(let todo of todos){
        if(todo.id == id){
            wantedTodo=todo;
            break;
        }
    }
    wantedTodo.name = newName;
    wantedTodo.urgency= newUrgency;
}
/////////////////////////////////////////////////////////////////////////////

function displayDeleteTodos(todos){
    displayTodos(todos);
    const delid = prompt('Enter the id to delete: ');
    deleteTodos(todos, delid);
}

function deleteTodos(todos,delid){
    //we need to find idnex of todo in array
    let wantedIndex = null; 
    for(let i=0; i<todos.length; i++){
        if(delid == todos[i].id){
            wantedIndex=i;
            break;
        }
    }
    todos.splice(wantedIndex,1)
}
///////////////////////////////////////////////////////////////////////////////


displayUpdateTodos(todos);
displayTodos(todos);
// displayCreateTodo(todos);
// displayTodos(todos);
// displayDeleteTodos(todos);
// displayTodos(todos);