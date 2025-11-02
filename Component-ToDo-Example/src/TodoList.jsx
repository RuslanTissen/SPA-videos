import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  const handleClick = (item) => {
    const newTodos = todos.filter((x) => x !== item);
    setTodos(newTodos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {todos.map((item) => (
          <li
            onClick={() => {
              handleClick(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}
