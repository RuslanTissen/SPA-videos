import "./main.css"
import stone from "./stone.jpg"

// App is a functional component
export default function App(){
    console.log("JS is here")

    const fruits = ["apl", "orng", "bnn"]
    const line = <hr />

    // JSX
    return (
        <main className="App" id="fr">
            <b>React is comming</b>
            {line}
            <img src={stone} width="50px"/>
            {Math.random() > 0.5 ? <p>Yes</p>  : <p>No</p> }

            <ol>
                {fruits.map(word => <li>{word}</li>)}
            </ol>
        </main>
    )
}