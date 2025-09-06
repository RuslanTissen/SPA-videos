import { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Version with object state variable
function App() {
    const [data, setData] = useState({name: "", code: ""})
    
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleCodeChange = (e) => {
        setCode(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here add yuor logic
        alert("Data ready to save")
        const data = {
            name: name,
            code: code
        }
        // Send the "data" to an API
    }

    return(
        <form onSubmit={handleSubmit}>
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

//Version with separate state varibles


// function App() {
//     const[name, setName] = useState("Steve Bezos")
//     const[code, setCode] = useState("")
// 
//     const handleNameChange = (e) => {
//         setName(e.target.value)
//     }
// 
//     const handleCodeChange = (e) => {
//         setCode(e.target.value)
//     }
// 
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // Here add yuor logic
//         alert("Data ready to save")
//         const data = {
//             name: name,
//             code: code
//         }
//         // Send the "data" to an API
//     }
// 
//     return(
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <input type='text' value={name} onChange={handleNameChange}></input>
//             </div>
//             <div>
//                 <input type='text' value={code} onChange={handleCodeChange}></input>
//             </div>
//             <button>Add smth to database</button>
//         </form>
//     )
// }
