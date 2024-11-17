import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import IconCart from '../../assets/carShopping.png'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  const quantity = totalQuantity()

  return (
    <Link to='/cart' className='cartWidget'>
      <img src={IconCart} alt="" width={30} />
      <h3>{quantity >= 1 && quantity}</h3>
    </Link>
  )
}

export default CartWidget
