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
                <Link to={"/login"}>
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    <p>Login</p>
                </Link>
            </div>
            <div className="cart">
                <Link to={"/cart"}><i className="fa-solid fa-cart-shopping"></i></Link>
            </div>
        </div>
    )
}

export default Navbar;