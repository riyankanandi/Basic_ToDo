import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos]= useState([{task:"sample-task", id:uuidv4(), isDone: false}]);
    let[newTodo, setNewTodo]= useState("");
    let addTask=()=>{
        setTodos((prevTodos) =>{
           return [...todos,{task:newTodo, id: uuidv4(),isDone: false}]
        })
        setNewTodo("");
    }



    let updateTodoValue=(event)=>{
setNewTodo(event.target.value)
    }




    let deleteTodo=(id)=>{
     setTodos( todos.filter((todo)=> todo.id!= id));
        
       
       console.log(id);
    }



    
// let allMark = () => {
//     let arr = todos.map((todo) => {
//         if (todo.isDone === false) {
//             return {
//                 ...todo,
//                 isDone: true,
                
//             };
//         } else {
//             return todo;
//         }
//     });
//    console.log(arr); // Update the state with the new array
// };

 let strikeThrough = () => {
    setTodos((prevTasks) =>
        prevTasks.map((todo) => ({
            ...todo,
            isDone: true,
        }))
    );
};



//         setTodos((prevTasks)=>
//             prevTasks.map=(todo)=>{
           
//              return {...todo,
//              style: { textDecoration: "line-through" },
//              isDone: true,
//     };

//   }
// );
// console.log(arr());
let MarkTodo = (id) => {
  setTodos(prevTasks =>
    prevTasks.map(todo =>
      todo.id === id ? { ...todo, isDone: true } : todo
    )
  );
};


    return (
        <div>
        
        <input placeholder="Add a task" value={newTodo}  onChange={updateTodoValue}></input>
        <br />
        <br/>
        <div className=""></div>
        <button onClick={addTask}>Add Task</button>
        <br>
        </br>
        <br/>
        <br/>
        <hr></hr>
<h2>Todo List</h2>
<ul>
{
    todos.map((todo)=>(
        <li key={todo.id}>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
  {todo.task}
</span>


            &nbsp;
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
             <button onClick={()=>MarkTodo(todo.id)}>Mark as Done</button>
        </li>
    ))

    
  

}
</ul>


<br />
<br />
<button onClick={strikeThrough}>Mark All as done</button>

{/* console.log(todos); */}

        </div>
    )
}