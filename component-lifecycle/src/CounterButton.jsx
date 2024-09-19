import { useState, useEffect } from "react"

// console.log("Dont do this!");

export default function CounterButton() {
    const [counter, setCounter] = useState(0)
    const [display, setDisplay] = useState(false)

    useEffect(function() {
        console.log("First effect: After first render");
    }, [])
  
    useEffect(() => {
        console.log("Effect of display", display);
    }, [display])

    useEffect(function() {
        console.log("Second effect: After first render");
        
        return () => {console.log("Cleanup");}
    }, [])
    
    console.log(counter) // выполняется при первом рендере и каждом последующем перерендере

    return (
        <div>
            <button onClick={() => {setDisplay(!display); setCounter(0)}}>Toggle</button>
            {display && <button onClick={() => setCounter(counter + 1)}>{counter}</button>}
        </div>
        )
  }