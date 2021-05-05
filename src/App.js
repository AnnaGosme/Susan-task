import ToDoList from "./components/ToDoList";
import { useState , useRef, useEffect } from "react";
import uuidv4 from 'uuid/v4';

import "./App.css";

function App() {
const [todos, setTodos] = useState([]);
const todoNameref = useRef()
const LOCAL_STORAGE_KEY = 'todoApp.todos';

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos]);

function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

function handleAddTodo(e) {
  const name = todoNameref.current.value
  if (name === '') return
  setTodos(prevTodos => {
    return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
  })
  todoNameref.current.value = null
}

function handleClearTodos() {
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

  return (
    <div className="wrapper">
      <div className="text">
      <h1>Susan's Brain Dump Task List</h1>
      <h2>A special place for Mummy to keep track of her tasks</h2>
      </div>
      <div className="container">
      <img className="img" src="https://res.cloudinary.com/octavian2111/image/upload/v1619986415/images_1_tamyw5.png" alt="calm" />
      <div className="counter">{todos.filter(todo => !todo.complete).length} {todos.length === 1 ? "task" : "tasks"}</div>
      <input className="AddCard" ref={todoNameref} type="text" placeholder="Add your next task here ..."/>
     
      </div>
      <button className="add"onClick={handleAddTodo}>Add</button>
      <ToDoList className="ToDoList" todos={todos} toggleTodo={toggleTodo} />
      <button className="clear" onClick={handleClearTodos}>Clear</button>
    
      
    </div>
  );
}

export default App;
