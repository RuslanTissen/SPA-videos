# SPA - Асинхронное программирование

## Введение: Цикл запроса-ответа - Перспектива клиента

## Неблокирующие обещания (Promises)

- Блокирующий vs. неблокирующий код
  - `prompt("Назовите ваше имя")` - блокирующий
  - `setTimeout()` - неблокирующий

  - Рассмотрим два неблокирующих примера, которые СИМУЛИРУЮТ выполнение действий
  ```js
  const users = [];

  function addUser() {
    function actuallyAddUser(){
      users.push("Ирина")
      console.log("Пользователь добавлен", users)
    }
    setTimeout(actuallyAddUser, Math.random()*2000)
  }


  function deleteUser() {
    function actuallyDeleteUser() {
      users.pop()
      console.log("Пользователь удалён", users)
    }
    setTimeout(actuallyDeleteUser, Math.random()*5000)
  }

  addUser()
  deleteUser() // иногда удаление завершится ПЕРЕД добавлением!
  ```

- Гонка условий (race condition)
  - Это ошибка, вызванная тем, что действия происходят в неожиданном порядке

### Решение: Promises

- Обещания (promises) помогают ждать завершения действия, не блокируя выполнение других задач
  - Обещания можно сохранять в переменные
  - Сначала обещание находится в состоянии ожидания (pending)
  - Вы ждёте, когда обещание завершится, и затем выполняете действие

- Обещание может иметь три состояния:
  - В ожидании (Pending)
  - Выполнено (Fulfilled или resolved)
  - Отклонено (Rejected)

- Как в реальной жизни :)
  - Николай обещает помыть посуду сегодня
    - Сначала обещание в ожидании --> оно может либо выполниться, либо провалиться
    - Если оно выполнится, мы пойдём на долгую прогулку по пляжу
    - Если оно провалится, ситуацию нужно будет урегулировать, помыв посуду завтра

- Обещание также имеет результат после выполнения или отклонения
  - Отклонение часто возвращает объект ошибки или строку
  - Отклонения считаются ошибками
    - Их нужно обрабатывать в коде, иначе ошибка появится в консоли

- В JavaScript обещания создаются следующим образом:
  - `const promise = new Promise(...)`

- Обещание принимает функцию
  - `const promise = new Promise(() => {})`

- Эта функция принимает "resolve" и "reject"
  - Эти два параметра отвечают за успешное выполнение или провал обещания

  ```js
  var promise = new Promise((resolve, reject) => {

    function doStuff() {
      const random = Math.round(Math.random())
      if (random === 1) {
        resolve("ВЕЛИКИЙ УСПЕХ")
      } else {
        reject("ПОЛНЫЙ ПРОВАЛ")
      }
    }

    setTimeout(doStuff, 10000)

  })
  ```

- Итак, наш предыдущий пример может работать следующим образом:

  ```js

  // Почему не использовать колбэки?
  function addUser2(cb) {
      function actuallyAddUser() {
        users.push("Ирина")
        cb("Ура, пользователь добавлен")
      }
      setTimeout(actuallyAddUser, Math.random()*2000)
  }

  // ад колбэков (callback hell)
  // пирамида ужаса (the pyramid of doom)
  /*
  addUser2(() => { 
    deleteUser((msg) => {
      updateUi((msg2) => {
        checkLogin(printGreeting)
      })
    }) 
  })
  */

  function addUser() {
    return new Promise((resolve, reject) => {

      const TEST = "ОШИБКА ПРИ ТЕСТИРОВАНИИ ADDUSER".tomato()

      function actuallyAddUser() {
        users.push("Ирина")
        resolve("Ура, пользователь добавлен")
      }
      setTimeout(actuallyAddUser, Math.random()*2000)

    })
  }

  function deleteUser() {
    return new Promise((resolve, reject) => {

      function actuallyDeleteUser() {
        users.pop()
        const coinFlip = Math.random() > 0.5
        if (coinFlip) {
          resolve("Пользователь успешно удалён")
        } else {
          reject("Не удалось удалить пользователя :(((")
        }
      }
      setTimeout(actuallyDeleteUser, Math.random()*5000)

    })
  }

  // если у вас много обещаний одно за другим
  // ПЕРВЫЙ, не самый приятный синтаксис
  const p = addUser()
  p.then((result) => {
    console.log("Добавление пользователя завершено!", result)
    const p = deleteUser()
    p.then((result) => {
      console.log("Удаление пользователя завершено :DD", result)
    })
  })

  // ВТОРОЙ, более приятный синтаксис :D
  // Более удобный синтаксис (этот приём называется цепочкой обещаний)
  addUser()
    .then((result)=>{
      console.log("Добавление 1 завершено", result)
      return deleteUser()
    }).then((result) => {
      console.log("Удаление завершено", result)
    }).catch((error) => {
      console.warn("О нет, ошибка :(", error)
    }).finally(() => {
      console.log("Все завершено :)")
    })
  ```

## JSON: "JSON - это JS объекты в тексте"

```js
  const admins = [
    { "name": "Рома", age: 15 },
    { name: "Варвара", age: 13 },
    { name: "Жека", age: 99 }
  ]
  // Преобразование JavaScript переменных в JSON
  const str = JSON.stringify(admins)

  // Преобразование JSON в JavaScript переменные
  const stuff = JSON.parse(str)

  // Подводные камни JSON
  JSON.parse('[1,2,3,]')
  JSON.parse('{"code": 1,}')
  JSON.parse('{"code": 01}')
  JSON.parse('{"code": .1}')
```