import Alert from "./components/Alert"

export default function App(){
    return (
        <main>
            {/* <Alert show={true} n={4} type="error"   message="Errors!" ms={console.log}/> */}

            <Alert show type="warning" message="Careful!!!">
                <p>Wornings:</p>
                <ul>
                    <li>Please check email</li>
                    <li>Pasword is too short</li>
                    <li>Dont use your old Password</li>
                </ul>
            </Alert>


            {/* <Alert show={false}      type="info"    message="Clouds are getting gray"/> */}
        </main>
    )
}