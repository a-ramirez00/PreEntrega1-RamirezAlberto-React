import React from 'react'
import { useState } from 'react'
import './checkout.css'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import db from '../../db/db.js'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: '',
        phone: '',
        email: ''
    })

    const [idOrder, setIdOrder] = useState(null)

    const { cart, totalPrice, deleteCart } = useContext(CartContext)

    const handleChangeInput = (event) => {


        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const order = {
            buyer: {
                ...dataForm
            },
            products: [
                ...cart
            ],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }

        upLoadOrder(order)

    }

    const upLoadOrder = (newOrder) => {

        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, newOrder)
            .then((response) => {
                setIdOrder(response.id)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                deleteCart()
            })
    }

    return (
        <div>
            {
                idOrder === null ? (<FormCheckout
                    dataForm={dataForm}
                    handleChangeInput={handleChangeInput}
                    handleSubmitForm={handleSubmitForm} />) : (
                    <div className='checkout'>
                        <h2> Gracias por su compra!</h2>
                        <p>Por favor guarde su numero de seguimiento : {idOrder}</p>
                        <Link className='Link' to='/'>Inicio</Link>
                    </div>
                )
            }

        </div>
    )
}

export default Checkout
