import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeTemplate from './components/HomeTemplate'
import Products from './sub-components/Products'
import ProductItem from './sub-components/ProductItem'
import AddToCart from './sub-components/AddToCart'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeTemplate/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productItem' element={<ProductItem/>}/>
        <Route path='/cart' element={<AddToCart/>}/>
      </Routes>
    </BrowserRouter>   
  )
}

export default App
