import { useState } from "react"

export default function MagicList(){
    const [list, setList] = useState([])

    function addToList() {
        const newList = list.map(x => x)

        newList.push("Hi")

        setList(newList)
    }

    return(
        <ul onClick={addToList}>
            <h3>Magic List:</h3>
            {list.map(item => <li>{item}</li>)}
        </ul>
    )
}