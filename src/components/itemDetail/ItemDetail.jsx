import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ product }) => {

    const [showItemCount, setShowItemCount] = useState(true)

    const { addProductInCart } = useContext(CartContext)

    const addProduct = (count) => {

        const productCart = { ...product, quantity: count }
        addProductInCart(productCart)
        setShowItemCount(false)

    }


    const [currentImage, setCurrentImage] = useState(product.image[0])
    const images = product.image.filter((image) => image !== currentImage)



    return (
        <div className='item-detail' >
            <div className='item-detail-secondary'>
                {
                    images.map((image) => (
                        <img src={image} key={image} width={50} onClick={() => setCurrentImage(image)} />
                    ))
                }
            </div>
            <div className='item-detail-img'>
                <img src={currentImage} sizes={200} alt="" />

            </div>
            <div className='item-detail-add'>
                <h2> {product.name}</h2>
                <p>{product.description}</p>
                <h2> $ <span>{product.price}</span> </h2>
                <p>{product.stock} Unidades</p>
                {
                    showItemCount === true ? (
                        <ItemCount stock={product.stock} addProduct={addProduct} />
                    ) : (
                        <Link className='Link' to='/cart'> Ver carrito</Link>
                    )
                }
            </div>
        </div>
    )
}

export default ItemDetail
