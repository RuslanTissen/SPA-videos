import Expander from "./Expander.jsx";
import MagicList from "./MagicList.jsx";

export default function App() {
    return (
        <main>
            <Expander text="Some list">
                <MagicList />
                <MagicList />
            </Expander>
            <Expander text="Some text"/>
            <Expander text="Some message"/>
            <Expander text="Say Hallo"/>
        </main>
    )
}