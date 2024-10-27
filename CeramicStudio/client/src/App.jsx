import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeTemplate from './components/HomeTemplate'
import Products from './sub-components/Products'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeTemplate/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>   
  )
}

export default App
