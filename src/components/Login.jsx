import React from "react";
import Input from "./Input";

function Login() {

    return (
        <form action="" method="post">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;