import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState(["?"]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {todos.map((item) => (
          <li>{item}</li>
        ))}
        {/* <li>Buy a tea</li>
        <li>Go to a cinema</li> */}
      </ul>
    </form>
  );
}
