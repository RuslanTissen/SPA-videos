import { useEffect, useState } from "react";

export default function TodoList(props) {
  const { todos, setTodos } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const convertedTodos = result.map((x) => x.title);
        setTodos(convertedTodos);
      });
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  const handleClick = (item) => {
    const newTodos = todos.filter((x) => {
      return x !== item;
    });
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
