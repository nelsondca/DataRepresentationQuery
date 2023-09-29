//(a)
const myTasks = [];//Creating an arrays of strings

//(b)
let addTask = (task) =>{//Creating a addtask function
               //passing a string as a parameter called task
    let length = myTasks.push(task);//adding the task to the array
    console.log("Task:" + task + "was added!")//prints the message in cosole
    return length;//It returns the number of elements in the array

}

//(c)
let listAllTask = ()=>{//creating a list of all tasks
    myTasks.forEach((item)=>{//foreach to iterate over all the tasks in the array
        console.log(item);//printing each array item in the console
    })
}



//(d)
let deleteTask = (task)=>{//passing a string as paramater called task
    let index = myTasks.indexOf(task);//finidng the index of a task

    if(index > -1){//creating an if statement to build a condition
    myTasks.splice(index,1);//
         console.log("Task:" + task + "has been removed from the array.")
    }else{
        console.log("Task:" + task + "not found in Tasks!");
    
    }
    return myTasks.length;

}

addTask("learn js!");

addTask("learn REACT!");

listAllTask();

deleteTask("Learn js!");