import React from 'react'
import { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ stock, addProduct }) => {

    const [count, setCount] = useState(1)

    const handleClickRest = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleClickAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }


    return (
        <div className='count'>
            <div className='count-add'>
                <p onClick={handleClickRest}>-</p>
                <h3>{count}</h3>
                <p onClick={handleClickAdd}>+</p>
            </div>

            <p onClick={() => addProduct(count)} >Agregar al carrito</p>
        </div>
    )
}

export default ItemCount
