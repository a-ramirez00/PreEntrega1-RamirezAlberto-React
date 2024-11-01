import React from 'react'
import { getProducts } from '../../data/data.js'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setproduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams()
    console.log(idProduct)



    useEffect(() => {


        setLoading(true)


        getProducts()
            .then((data) => {
                const findProduct = data.find((product) => product.id === idProduct)
                setproduct(findProduct)
            }).finally(() => setLoading(false))
    }, [idProduct])

    return (
        <>
            {
                loading === true ? (<div> cargando...</div>) : <ItemDetail product={product} />

            }
        </>
    )
}

export default ItemDetailContainer
