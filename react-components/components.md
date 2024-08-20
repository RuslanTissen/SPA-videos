# SPA - Component

## Introduction: Thinking in Components

- When to use: Basic guidelines on when to create components
  - Clearly independent part of the page = component!
    - Header, Footer, ProductCategoryList
  - Repeating content = component!
    - ProductCategoryCard
    - ProductCard
  - Component getting too big to handle? component!
    - Header --> Logo, Search, HeaderMenu
  - Component getting too deeply indented? component!
    - Header --> HeaderMenuList --> MenuListItem

- Project organization: The `components` folder
  - App.jsx in components folder or not? Matter of opinnion :)

## Data flow 1

- PROPS
  - Example
    - Passing props
      - `<Alert message="This is a test" type="warning" />`
      - `<Alert message="This is a test" type="info" />`
    - Accepting props with a "prop" property which is an object
  - Children as are passed as a prop

      ```htm
      <Alert type="error">
        Invalid Drink Combination:
        <ul>
          <li>Corn juice</li>
          <li>Aquavit</li>
        </ul>
      </Alert>
      ```
  - Props can be Strings or Booleans or functions or numbers.... anything really

## Debugging React with "React Developer Tools" (chrome)

## React documentation
  - https://reactjs.org/ > docs