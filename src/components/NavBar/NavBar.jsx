import { IconoCarrito } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
         <div classname="d-flex">
            <div className="row justify-content-between mt-5">
                <div class="col-4">  
                    <h6 className="Fuente-Logo">Entre Verde</h6>
                </div>
                <div class="col-4">  
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                    <Link to="/"  className="nav-item nav-link active">Inicio</Link>
                                    <Link to="/productos/interior"  className="nav-item nav-link">Plantas de Interior</Link>
                                    <Link to="/productos/exterior" className="nav-item nav-link">Plantas de Exterior</Link>
                                    <Link to="/Cart" className="nav-item nav-link"><IconoCarrito/></Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div> 
         </div>
    )
}

export default NavBar
