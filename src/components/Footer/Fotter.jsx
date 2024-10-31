import React from 'react'
import './footer.css'
import LogoTienda from '../../assets/LogoTienda.png'

import { Link } from 'react-router-dom'

const Fotter = () => {
    return (
        <div className='fotter'>
            <ul >
                <li>Categorias</li>
                <li >
                    <Link to='/category/celulares' className='link'> Celulares</Link>
                </li>
                <li >
                    <Link to='/category/tablets' className='link'> Tablets</Link>
                </li>
                <li >
                    <Link to='/category/notebooks' className='link'> Notebooks</Link>
                </li>
            </ul>
            <ul >
                <li>Soporte</li>
                <li>Contacto</li>
                <li>Centro de ayuda</li>
                <li>Envios y pagos</li>
            </ul>
            <ul >
                <li>Redes sociales</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Whatsapp</li>
            </ul>
            <ul >
                <li >
                    <Link to='/'className='link' > <img src={LogoTienda} alt="" /> Samsung Store</Link>
                </li>
                <li>Todos los derechos reservados</li>
                <li>Actividad sin fines de lucro</li>
            </ul>
        </div>
    )
}

export default Fotter
