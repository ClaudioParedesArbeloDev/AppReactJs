import { Link } from "react-router-dom";

import "./login.css"

function Login() {
    return (
        <div className="loginPage">
            <form className="form" action="">
                <label htmlFor="Username">Username</label>
                <input type="text" id="Username" placeholder="Username" />
                <label htmlFor="Password">Password</label>
                <input type="password" id="Password" placeholder="Password" />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
            </form>
        </div>
    )
}

export default Login;   