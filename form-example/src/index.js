import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    const[name, setName] = useState("Old Muskus")
    const[code, setCode] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleCodeChange = (e) => {
        setCode(e.target.value)
    }

    console.log("Name: ", name, "Code: ",code);

    return(
        <form>
            <div>
                <input type='text' value={name} onChange={handleNameChange}></input>
            </div>
            <div>
                <input type='text' value={code} onChange={handleCodeChange}></input>
            </div>
            <button>Add smth to database</button>
        </form>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
