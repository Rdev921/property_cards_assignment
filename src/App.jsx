import React from 'react'
import { Routes,Route} from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductList/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
    </Routes>
  )
}

export default App