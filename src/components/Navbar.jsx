import "./main.css"
import logo from './public/vite.png';
function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="" />

            <h1>Web Development Technologies </h1>
        </div>
    );
}

export default Navbar;