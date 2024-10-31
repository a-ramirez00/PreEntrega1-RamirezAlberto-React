import './NavBar.css'
import LogoTienda from '../../assets/LogoTienda.png'
import CartWidget from './CartWidget'
import DarkMode from './DarkMode'

import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <header>



                <nav className='navBar'>
                    <ul>
                        <li >
                            <Link to='/' ><img src={LogoTienda} alt="" /></Link>
                        </li>
                        <li >
                            <Link to='/category/celulares' className='link'> Celulares</Link>
                        </li>
                        <li >
                            <Link to='/category/tablets' className='link'> Tablets </Link>
                        </li>
                        <li >
                            <Link to='/category/notebooks'className='link' > Notebooks </Link>
                        </li>
                    </ul>
                    <ul>
                        {/* Componente CartWidget, donde mostramos un icono de carrito con un número hardcodeado al lado */}
                        <li><CartWidget cantidadCompras={0} /></li>
                        {/* Componente DarkkMode, el que servira para modo oscuro de la aplicaion */}
                        <li><DarkMode /></li>
                    </ul>
                </nav>

        </header>
    )

}
export default NavBar