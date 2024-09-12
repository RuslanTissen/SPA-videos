# Введение: Каждый компонент имеет жизненный цикл

- Жизненный цикл функционального компонента состоит из трёх этапов:

1. Первичный рендер (Initial render) — компонент добавляется на страницу
2. Обновление/Перерендер (Update/Re-render) — компонент перерисовывается (когда изменяется состояние (state) или пропсы(props))
3. Удаление (Unmount) — компонент больше не присутствует на странице и удаляется

## Пример кода:

```js

function CounterButton() {
  const [counter, setCounter] = useState(0)
  const [display, setDisplay] = useState(true)

  console.log(counter) // выполняется при первом рендере и каждом последующем перерендере

  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}
```

- Иногда нужно выполнить код только при первом рендере компонента
- Иногда нужно выполнить код при удалении компонента (например, очистка ресурсов)
- Иногда нужно выполнить код при изменении состояния (state) или пропсов (props)
- Иногда нужно выполнить код каждый раз, когда что-то изменяется (как в примере выше)

- В таких случаях мы используем хук, который помогает управлять кодом на разных этапах жизненного цикла компонента:

1. useEffect(effect, dependencies)
2. effect — это функция, которую нужно выполнить
3. dependencies — это необязательный массив, который контролирует, когда функция выполняется.

---------------------------------------------------------------------

Each component has a lifecycle
A (functional) component lifecycle consists of three distinct parts

Initial render -----> component is being added to the page
Update/Re-render ---> component is re-rendered (state or props changed)
Unmount ------------> component is no longer present on the page and is deleted
function CounterButton() {
  const [counter, setCounter] = useState(0)
  const [display, setDisplay] = useState(true)

  console.log(counter) // runs for the first render AND for each re-render

  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>
}
Sometimes you want to run some code just the first time a component is rendered

Sometimes you want to run some code just the last time a component is rendered (cleanup)

Sometimes you want to run some code when a state variable changes

Sometimes you want to run some code every time anything changes (example above)

We have a hook that helps us do stuff on these different stages

useEffect(effect, dependencies)
the "effect" is a function to run
the "dependencies" is an optional array that controls when the function runs





