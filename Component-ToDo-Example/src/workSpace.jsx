useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => setTodos(data));
}, []); // ← пустые скобки — наш щит от бесконечного рендера!
