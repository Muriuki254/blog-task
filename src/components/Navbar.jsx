import "./main.css"
import logo from './images/vite.svg';
import { Link } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaBook } from "react-icons/fa"
function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <div style={{ display: "flex", gap: "8rem" }}>
                <Link to='/' className="navLink" style={{ display: "flex", gap: "3px", alignItems: "center", textDecoration: "none", color: "brown" }}><FaHome />Home</Link>
                <Link to='/about' style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", color: "purple" }}><FaInfoCircle /> About</Link>
                <Link to='/blogs' style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", color: "green" }}><FaBook /> Blogs</Link>
            </div>

            <h1>Web Development Technologies </h1>
        </div>
    );
}

export default Navbar;