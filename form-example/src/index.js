import { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// Version with a single state variable (OBJECT)  
function App() {
    const[data, setData] = useState({login: "",  psw: ""})

    const handleChange = (e) => {
        console.log(e.target.name);
        setData({
            ...data,
            // Квадратные скобки нужны, чтобы использовать переменную как имя ключа объекта.
            // вычисляемое свойство объекта (computed property)
            [e.target.name]:e.target.value
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here add your logic
        alert("Data ready to save")
        
        // Send the "data" to an API
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={data.login} name='login' onChange={handleChange}></input>
            </div>
            <div>
                <input type='text' value={data.psw} name='psw' onChange={handleChange}></input>
            </div>
            <button>Add smth to database</button>
        </form>
    )
}

// useRef experiement
function RefTest() {
    const inputElement = useRef()
    
    const send = () => {
        inputElement.current.focus()
        // console.log(inputElement.current.value);
        // send to API or create an object or do whatever you want
        // console.log({name: inputElement.current.value});
    }

    return(
        <div>
            <input type='text' ref={inputElement}></input>
            <input type='text'></input>
            <button onClick={send}>Send</button>
        </div>
    )
}


const root = createRoot(document.getElementById('root'));
root.render(<RefTest />);


























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
//   const handleSubmit = (e) => {
        // e.preventDefault()
        // // Here add your logic
        // alert("Data ready to save")
        // const data = {
            // name: name,
            // code: code
        // }
        // // Send the "data" to an API
    // }
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





// Version with object state variable
// function App() {
//     const [data, setData] = useState({name: "", code: ""})
    
//     const handleNameChange = (e) => {
//         setName(e.target.value)
//     }

//     const handleCodeChange = (e) => {
//         setCode(e.target.value)
//     }

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

//     return(
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <input type='text' value={data.name} onChange={handleNameChange}></input>
//             </div>
//             <div>
//                 <input type='text' value={data.code} onChange={handleCodeChange}></input>
//             </div>
//             <button>Add smth to database</button>
//         </form>
//     )
// }