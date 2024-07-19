## SPA - Асинхронное программирование

### В прошлый раз:

- Async/Await
- try...catch

  ```js
  function login(e, p) {
    return new Promise(....)
  }

  document.querySelector("#submitLogin").addEventListener("click", async () => {
    try {
      const success = await login(email, password)
      showMessageAndRedirect(`Access ${success ? "Granted" : "Denied"}`)
    } catch(error) {
      handleError(error)
    }
  })
  ```

  ### Сегодня

- Теория запросов
- `fetch()`

## Получение данных: Примеры использования Fetch

- `fetch(<url>)`
	- Fetch возвращает Promise
  	- Когда Promise разрешается, он возвращает Response (ответ)

```js
// Fetch с использованием .then
fetch('https://www.google.com')
    .then(response => {console.log(response)})

// 	Fetch с использованием await
const response = await fetch('https://www.google.com')
```

## HTTP запросы

- Повторение методов HTTP: GET vs. POST
  - GET используется для получения данных
  - POST используется для создания данных (обычно, но это на самом деле имеет гибкость)

- POST-запросы могут содержать полезную нагрузку (payload), которую они отправляют
- GET-запросы не имеют полезной нагрузки

## Отправка данных: Примеры с JSONPlaceholder

- https://jsonplaceholder.typicode.com/