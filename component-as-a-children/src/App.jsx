import Expander from "./Expander.jsx";
import MagicList from "./MagicList.jsx";
import "./style.css"

export default function App() {
    return (
        <main>
            <Expander text="Some list" buttonText="You pushed ">
                <MagicList />
                <MagicList />
            </Expander>
            <Expander buttonText="You pushed " text="Some text"/>
            <Expander buttonText="You pushed " text="Some message"/>
            <Expander buttonText="You pushed " text="Say Hallo"/>
        </main>
    )
}