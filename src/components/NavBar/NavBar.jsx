import './NavBar.css'
import LogoTienda from '../../assets/LogoTienda.png'
import CartWidget from './CartWidget'
import DarkMode from './DarkMode'

function NavBar() {
    return (
        <header>

            <nav className='navBar'>
                <ul>
                    <li><img src={LogoTienda} alt="" /></li>
                    <li>Celulares</li>
                    <li>Tablets</li>
                    <li>Laptops</li>
                </ul>
                <ul>
                    {/* Componente CartWidget, donde mostramos un icono de carrito con un número hardcodeado al lado */}
                    <li><CartWidget cantidadCompras={0}/></li>
                    {/* Componente DarkkMode, el que servira para modo oscuro de la aplicaion */}
                    <li><DarkMode/></li>
                </ul>
            </nav>

        </header>
    )

}
export default NavBar