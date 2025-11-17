import { useState } from "react";
import Header from "./Header.jsx";
import TodoList from "./TodoList.jsx";

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header amountOfTodos={todos.length} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
