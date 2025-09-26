import { useState, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";

// Version with a single state variable (OBJECT)
function App() {
  const [data, setData] = useState({ login: "", psw: "" });

  const handleChange = (e) => {
    console.log(e.target.name);
    setData({
      ...data,
      // Квадратные скобки нужны, чтобы использовать переменную как имя ключа объекта.
      // вычисляемое свойство объекта (computed property)
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here add your logic
    alert("Data ready to save");

    // Send the "data" to an API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={data.login}
          name="login"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={data.psw}
          name="psw"
          onChange={handleChange}
        ></input>
      </div>
      <button>Add smth to database</button>
    </form>
  );
}

// useRef as a mutable variable
function RefTest() {
  const [text, setText] = useState("");
  const counter = useRef(0);
  const inputElement = useRef();

  const send = () => {
    counter.current += 1;
    inputElement.current.focus();
  };

  console.log(text, counter.current);

  return (
    <div>
      <input type="text" ref={inputElement}></input>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={send}>Send</button>
    </div>
  );
}

function UncontrolledInput() {
  const inputRef = useRef(null);

  const showValue = () => {
    alert(`Вы ввели: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Введите текст" />
      <button onClick={showValue}>Показать</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<UncontrolledInput />);
