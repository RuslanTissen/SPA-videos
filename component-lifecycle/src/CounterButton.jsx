import { useState, useEffect } from "react"

// console.log("Dont do this!");

export default function CounterButton() {
    const [counter, setCounter] = useState(0)
    const [display, setDisplay] = useState(true)

    useEffect(function() {
        console.log("CounterButton After first render");
    }, [])
  
    console.log(counter) // выполняется при первом рендере и каждом последующем перерендере
  


    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display && <button onClick={() => setCounter(counter + 1)}>{counter}</button>}
        </div>
        )
  }