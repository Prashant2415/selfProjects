import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import DailyStories from './components/DailyStories'
import AddStories from './components/AddStories'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DailyStories/>}/>
        <Route path="/addStories" element={<AddStories/>}/>
      </Routes>
    </Router>
  )
}

export default App
