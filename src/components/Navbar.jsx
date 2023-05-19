import "./main.css"
// import logo from './images/vite.svg';
import { Link } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaBook } from "react-icons/fa"
function Navbar() {
    return (
        <div className="navbar">
            {/* <img src={logo} alt=""/> */}
            <h1 className="navbar-title">WEB DEV NEWS</h1>
            <div className="navbar-items">
                <Link to='/home' className="navLink"><FaHome />Home</Link>
                <Link to='/' className="navLink"><FaBook /> Blogs</Link>
                <Link to='/about' className="navLink"><FaInfoCircle /> About</Link>
                
            </div>
        </div>
    );
}

export default Navbar;