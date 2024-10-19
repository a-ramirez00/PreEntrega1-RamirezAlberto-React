import './App.css'

import NavBar from './components/NavBar/NavBar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      {/* Componente NavBar, donde figura la barra de navegacion */}
      <NavBar/>
      {/* Componente ItemListContainer, donde mandamos un mensaje a traves de las props */}
      <ItemListContainer productos={'Nuestros Productos'} />
    </div>

  )
}

export default App
