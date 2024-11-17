import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
    return (
        <div className="navBar"> 
            <div className="logo">
                <p>Tienda Virtual</p>
            </div>
            <nav>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/products"}>Products</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </nav>
            <div className="login">
                
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                <p>Login</p>
            </div>
            <div className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}

export default Navbar;