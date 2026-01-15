import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const removeTodoHnadler = (todoId : string) =>{
        const newTodo = todos.filter((todo:Todo) =>{
          return todo.id != todoId;
        })
        setTodos(newTodo);
  }

  return (
    <main className="max-w-6xl mx-auto my-10">
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo = {removeTodoHnadler}/>
    </main>
  );
}

export default App;
