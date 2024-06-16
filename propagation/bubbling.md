## Propagation (Bubble/capture), Delegation

## Event bubbling: Что такое "всплытие событий"?
- Всплытие событий (или "event bubbling") — это процесс, при котором событие, например, клик мышью, сначала обрабатывается целевым элементом, а затем передаётся его родительским элементам, поднимаясь вверх по иерархии DOM (Document Object Model).

      BUTTON <--- CLICK!
    DIV <- event bubbles to parent
  BODY <- event bubbles to parent

  ## Event capturing: Что такое "перехват событий"?
- Перехват событий (или "event capturing") — это процесс, при котором событие сначала обрабатывается самыми верхними элементами иерархии DOM (Document Object Model), а затем передаётся вниз к целевому элементу.

 BODY <- event captured from parent
   DIV <- event captured from parent
      BUTTON <--- CLICK!
   DIV <- event bubbles to parent
BODY <- event bubbles to parent