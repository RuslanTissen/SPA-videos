## Handling Forms

- A clash of state: State in vanilla HTML form vs. state in React component
- In React, the state is the single source of truth

  - The state controls the elements
  - The elements don'tcontrol the state (you do that usualy with useState function)

  - Controlled inputs --> Our source code is controlling the input value AND how it's changed!
  - Uncontrolled inputs --> Our source code is NOT controlling the input

  ## The useRef hook

  - чаще всего используют как ссылку, чтобы напрямую получить доступ к элементу на странице, например к INPUT или BUTTON.

  - Но у него есть и другое полезное применение: с его помощью можно хранить изменяемое значение (mutable variables), как в обычной переменной.

  - Главное отличие от useState в том, что когда вы меняете это значение, компонент не перерисовывается.

  - Например, так удобно считать количество кликов, прокрутки или хранить какой-то временный счётчик, который не должен вызывать ререндер.
