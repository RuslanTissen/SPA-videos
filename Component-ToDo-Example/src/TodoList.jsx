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

  const handleClick = (index) => {
    const newTodos = todos.filter((x, i) => {
      return i !== index;
    });
    setTodos(newTodos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {todos.map((item, index) => (
          <li
            onClick={() => {
              handleClick(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}
