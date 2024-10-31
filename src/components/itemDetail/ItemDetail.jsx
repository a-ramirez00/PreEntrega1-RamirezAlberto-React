import React from 'react'
import './itemDetail.css'


const ItemDetail = ({product}) => {
    return (
        <div className='item-detail' >
            <div className='item-detail-secondary'>

            </div>
            <div className='item-detail-img'>

            <img src={product.image}  alt="" />
            </div>
            <div className='item-detail-add'>
                <h2> {product.name}</h2>
                <p>{product.description}</p>
                <h2> $ <span>{product.price}</span> </h2>
                <p>{product.stock} Unidades</p>
            </div>
        </div>
    )
}

export default ItemDetail
