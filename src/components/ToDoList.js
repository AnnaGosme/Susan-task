import ToDo from "./ToDo";
import "./ToDoList.css";

export default function ToDoList({ todos, toggleTodo }) {
    return (
       <div className="List">
            {todos.map(todo => {
            return <ToDo className="todo" key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
    
})}
    </div>
    )
}
