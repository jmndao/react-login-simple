import React from "react";
import Login from "./Login";

const isLoggedIn = false;

function App() {

    return ( 
        <div className="container">
            { isLoggedIn ? <h1>Hello ! You're logged in</h1> : <Login /> }
        </div>
    )
}

export default App;