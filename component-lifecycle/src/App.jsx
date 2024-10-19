import { useState } from "react";
import CounterButton from "./CounterButton";

export default function App(){
    const [show, setShow] = useState(true)

    return (<div>
                <p onClick={() => setShow(!show)}>Show or Hide</p>
                {show && <CounterButton />}
            </div>
        )
}