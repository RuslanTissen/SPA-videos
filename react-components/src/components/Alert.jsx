import "./Alert.css"

export default function Alert(props){
    console.log(props)
    const { type, message, ms, show, children } = props; // Destructuring assignment

    if (ms) { ms("Hi from Alert!")}
    if (!show) { return null}

    return (
        <div className={type}>
            {type === "error" ? "🔴" : ""}
            {type === "warning" ? "⚠️" : ""}
            {type === "info" ? "ℹ️" : ""}
            {message}
            {children}
        </div>
    )
}