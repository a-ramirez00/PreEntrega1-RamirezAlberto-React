import React from 'react'
import { getProducts } from '../../data/data.js'
import { useState, useEffect } from 'react'
import ItemList from './ItemList.jsx'
import './itemListContainer.css'

const ItemListContainer = ({ productos }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    getProducts()
      .then((data) => {
        setProducts(data)
      })
  }, [])


  return (
    <div >
      <h1>{productos}</h1>
      {
        <ItemList products={products} />

      }
    </div>
  )
}

export default ItemListContainer
