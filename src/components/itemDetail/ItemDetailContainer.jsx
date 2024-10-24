import React from 'react'
import { getProducts } from '../../data/data.js'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setproduct] = useState({})
    const { idProduct} = useParams()
    console.log(idProduct)



    useEffect(() => {
        getProducts()
            .then((data) => {
                const findProduct = data.find((product) => product.id === idProduct)
                setproduct(findProduct)
            })
    }, [idProduct])

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer
