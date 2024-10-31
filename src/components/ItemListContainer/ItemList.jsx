import React from 'react'
import Item from './Item'



const ItemList = ({ products, nombre }) => {
    console.log(nombre)
    return (
        <div>

            <h1>{nombre}</h1>
            <div className='item-list-container'>
                {
                    products.map((product) => (
                        <Item product={product} key={product.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default ItemList
