import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserDetails from './components/UserDetails'
import UserInput from './components/UserInput'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserDetails/>}/>
        <Route path='/userInput' element={<UserInput/>}/>
      </Routes>
    </Router>
  )
}

export default App
