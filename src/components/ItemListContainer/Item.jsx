import React from 'react'

const Item = ({ product }) => {
    return (
        <div className='card'>
            <div>
                <img src={product.image} alt="" />
            </div>
            <h2>{product.name}</h2>
            <ul>
                <li> <span>$</span> {product.price}</li>
                <li><span>{product.stock} unidades</span></li>
            </ul>

        </div>
    )
}

export default Item
