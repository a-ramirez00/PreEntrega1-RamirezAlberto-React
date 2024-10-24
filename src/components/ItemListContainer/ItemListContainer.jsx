import React from 'react'
import { getProducts } from '../../data/data.js'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ productos }) => {

  const [products, setProducts] = useState([])
  const { idCategory } = useParams()


  useEffect(() => {

    getProducts()
      .then((data) => {
        if (idCategory) {
          const filterProducts = data.filter((product)=> product.category === idCategory)
          setProducts(filterProducts)
        } else {
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log('finalizo la promesa')
      })
  }, [idCategory])


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
