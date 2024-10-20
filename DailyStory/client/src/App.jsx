import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import DailyStories from './components/DailyStories'
import AddStories from './components/AddStories'
import UpdateStory from './components/UpdateStory'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DailyStories/>}/>
        <Route path="/addStories" element={<AddStories/>}/>
        <Route path="/updatePage" element={<UpdateStory/>}/>
      </Routes>
    </Router>
  )
}

export default App
