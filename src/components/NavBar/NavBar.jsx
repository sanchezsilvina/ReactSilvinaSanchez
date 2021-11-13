import { IconoCarrito } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex flex-row-reverse">  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to="/"  className="nav-item nav-link active">Inicio</Link>
                    <Link to="/productos/interior"  className="nav-item nav-link">Plantas de Interior</Link>
                    <Link to="/productos/exterior" className="nav-item nav-link">Plantas de Exterior</Link>
                    <Link to="/Cart" className="nav-item nav-link"><IconoCarrito/></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
