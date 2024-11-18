import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './cart.css'
const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='cart-cero'>
                <h1>EL carrito esta vacio</h1>
                <Link className='link' to='/'>Inicio </Link>
            </div>
        )
    }

    return (
        <div className='cart'>
            <h1>productos en el carrito</h1>
            {
                cart.map((productCart) => (
                    <div className='map' key={productCart.id}>
                        <img src={productCart.image[0]} width={100} alt="" />
                        <p>{productCart.name}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Precio: {productCart.price * productCart.quantity}</p>
                        <span onClick={() => deleteProductById(productCart.id)}>❌</span>
                    </div>

                ))
            }
            <h2> Precio total:{totalPrice()}</h2>
            <div className='finish'>
            <span onClick={deleteCart}> borrar carrito</span>
            <Link className='Link' to={'/checkout'}>Terminar mi compra</Link>
            </div>
        </div>
    )
}

export default Cart
