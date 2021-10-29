import { IconoCarrito } from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div class="d-flex flex-row-reverse">  
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Inicio<span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/quienessomos.html">Quienes Somos</a>
                    <a class="nav-item nav-link" href="/productos.html"><IconoCarrito/></a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
