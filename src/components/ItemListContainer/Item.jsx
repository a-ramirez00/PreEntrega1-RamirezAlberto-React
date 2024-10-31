import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ product }) => {
    return (
        <div className='card'>
            <div className='img'>
                <img src={product.image} alt="" />
            </div>
            <h2>{product.name}</h2>
            <ul>
                <li> <span>$</span> {product.price}</li>
                <li><span>{product.stock} unidades</span></li>
            </ul>


            <Link  className='detalles'  to={'/detail/' + product.id} > Más información </Link>
        </div>
    )
}

export default Item
