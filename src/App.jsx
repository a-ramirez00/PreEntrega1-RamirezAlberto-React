import './App.css'

import NavBar from './components/NavBar/NavBar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>

      <BrowserRouter>

        {/* Componente NavBar, donde figura la barra de navegacion */}
        <NavBar />


        <Routes>

          <Route path='/' element={<ItemListContainer productos={'Nuestros productos'} />} ></Route>
          <Route path='/category/:idCategory' element={<ItemListContainer />} ></Route>
          <Route path='/detail/:idProduct' element={<ItemDetailContainer />}></Route>
        </Routes>



        {/* Componente ItemListContainer, donde mandamos un mensaje a traves de las props */}




      </BrowserRouter>

    </div>
  )
}

export default App
