import { useState } from "react"

export default function Expander(props){
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(null)

    const handleClick = (e) => {
        console.log(e);
        setShow(!show)
        setCount(count + 1)
    }
    
    return(
        <div>
            <button onClick={handleClick}>
                {props.buttonText}{count}
            </button>
            <p>{props.text}</p>
            {show ? props.children : null}
        </div>
    )
}