export default function Expander(props){
    const show = false
    return(
        <div>
            <button>
                Push me
            </button>
            <p>{props.text}</p>
            {show ? props.children : null}
        </div>
    )
}