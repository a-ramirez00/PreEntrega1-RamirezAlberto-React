import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div>
                <h2>EL carrito esta vacio</h2>
                <Link to='/'>Inicio </Link>
            </div>
        )
    }

    return (
        <div>
            <h2>productos en el carrito</h2>
            {
                cart.map((productCart) => (
                    <div key={productCart.id}>
                        <img src={productCart.image[0]} width={100} alt="" />
                        <p>{productCart.name}</p>
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Precio: {productCart.price * productCart.quantity}</p>
                        <button onClick={() => deleteProductById(productCart.id)}>x</button>
                    </div>

                ))
            }
            <p> Precio total:{totalPrice()}</p>
            <button onClick={deleteCart}> borrar carrito</button>
        </div>
    )
}

export default Cart
