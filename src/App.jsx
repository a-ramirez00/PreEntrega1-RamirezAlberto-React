import './App.css'

import NavBar from './components/NavBar/NavBar'
import Fotter from './components/Footer/Fotter'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

import Checkout from './components/checkout/Checkout'
function App() {
  return (
    <div>

      <BrowserRouter>
        <CartProvider>


          {/* Componente NavBar, donde figura la barra de navegacion */}
          <NavBar />


          <Routes>

            <Route path='/' element={<ItemListContainer productos={'Nuestros productos'} />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>

          <Fotter />

        </CartProvider>

        {/* Componente ItemListContainer, donde mandamos un mensaje a traves de las props */}




      </BrowserRouter>

    </div>
  )
}

export default App
