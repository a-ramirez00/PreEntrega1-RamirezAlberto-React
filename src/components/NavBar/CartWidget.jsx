import './CartWidget.css'
import IconCart from '../../assets/carShopping.png'

const CartWidget = ({cantidadCompras}) => {

  return (
    <div className='cartWidget'>
      <img src={IconCart} alt="" width={30} />
      <h3>{cantidadCompras}</h3>
    </div>
  )
}

export default CartWidget
