import React from "react";
import "./ToDo.css";

export default function ToDo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

  return (
    <div className="ToDoWrapper">
    <div className="todo-card">
      
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
      
      
      {todo.name}</div>
      
      </div>
    
  );
}
