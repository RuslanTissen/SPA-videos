## Handling Forms 

- A clash of state: State in vanilla HTML form vs. state in React component
- In React, the state is the single source of truth
    - The state controls the elements
    - The elements don'tcontrol the state (you do that usualy with useState function)

    - Controlled inputs --> Our source code is controlling the input value AND how it's changed!
    - Uncontrolled inputs --> Our source code is NOT controlling the input 