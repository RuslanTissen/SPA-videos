import { useState } from "react";
import CounterButton from "./CounterButton";
import Users from "./Users.jsx"

export default function App(){
    const [show, setShow] = useState(true)
    
    return (<div>
                <p onClick={() => setShow(!show)}>Show or Hide</p>
                {show && <CounterButton />}
                <Users />
            </div>
        )
}