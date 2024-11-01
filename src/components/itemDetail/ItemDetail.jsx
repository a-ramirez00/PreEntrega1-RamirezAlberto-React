import React from 'react'
import { useState } from 'react'
import './itemDetail.css'


const ItemDetail = ({ product }) => {

    const [currentImage, setCurrentImage] = useState(product.image[0])
    const images = product.image.filter((image) => image !== currentImage)



    return (
        <div className='item-detail' >
            <div className='item-detail-secondary'>
                {
                    images.map((image) => (
                        <img src={image} key={image} width={50}  onClick={() => setCurrentImage(image)} />
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
            </div>
        </div>
    )
}

export default ItemDetail
