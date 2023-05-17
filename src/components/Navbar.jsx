import "./main.css"
import logo from './images/vite.svg';
function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="" />

            <h1>Web Development Technologies </h1>
        </div>
    );
}

export default Navbar;