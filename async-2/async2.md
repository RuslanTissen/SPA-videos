### SPA - Async - 2 (advanced level!!!)

## Мини-определения

- Блокирующая операция: браузер не может выполнять другие действия, пока она выполняется
  - `<script>`
- Неблокирующая операция: браузер может выполнять другие действия, пока она выполняется
  - `<script>`

- Синхронная операция: мы ждём, пока она выполнится
  - `console.log("Картошка")`
- Асинхронная операция: мы можем выполнять другие действия, пока она выполняется
  - `setTimeout(...)`

## Упрощение асинхронного кода

- Что такое область видимости в JavaScript? (What is a scope in JS)

- Проблемы с promises:
  - Область видимости переменных делает код тяжеловесным с колбэками
  - Это может вызвать бесконечную цепочку promises

```js

getUsers() 					 // returns a promise
	.then(users => {
		return createUsersReport(users)		 // returns a promise
	})
	.then(report => {
		convertReportToPdf(report)		// returns a promise
			.then(pdf => {
				showReportModal(report, pdf)  // What is a problem?
			})
	})
	.catch(handeGetUsersError)

```

- Есть лучший, более современный способ использовать promises:
	- Называется async/await

```js
import {getusers, createUsersReport, convertReportToPdf} from "./report.js"

	const users = await getusers()
	const report = await createUsersReport(users)
	const pdf = await convertReportToPdf(report)
	showReportModal(report, pdf)

```

- Примечание 1: вы можете использовать "await" только внутри функции "async"
  - Использование await напрямую в вашем .js или консоли называется top-level await
    - Top-level await работает:
      - прямо в консоли браузера
      - внутри модулей
      - в Node REPL

- Примечание 2: функции async **всегда** возвращают promise

















  
 ```js
    import { getUsers, createUsersReport, convertReportToPdf } from './reportz.js'

    getUsers()
      .then(users => {
        return createUsersReport(users)
      })
      .then(report => {
        convertReportToPdf(report)
          .then(pdf => {
            showReportModal(report, pdf)
          })
      })
      .catch(handleGetUsersError)
  ```

- Есть лучший, более современный способ использовать promises:
  - Называется async/await

  ```js
    import { getUsers, createUsersReport, convertReportToPdf } from './reportz.js'

    const users = await getUsers()
    const report = await createUsersReport(users)
    const pdf = await convertReportToPdf(report)
    showReportModal(report, pdf)
  ```

- Примечание 1: вы можете использовать "await" только внутри функции "async"
  - Использование await напрямую в вашем .js или консоли называется top-level await
    - Top-level await работает:
      - прямо в консоли браузера
      - внутри модулей
      - в Node REPL
  - Работает только в современных браузерах/Node

- Примечание 2: функции async **всегда** возвращают promise

## Ошибки времени выполнения

- Отклонение (reject) является ошибкой, верно!
  - Помните "uncaught" в консоли?
  - Затем мы используем `.catch(...)` для обработки ошибки?
  - С `async/await` (и не только...) мы используем `try..catch`

  ```js
  function doStuff() {
    function inner() {
      const myError = new Error("Пушистый кролик")
      throw(myError)
    }
    inner()
  }

  try {
    doStuff()
  } catch(error) {
    console.warn("О нет", error)
  }
  ```