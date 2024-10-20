import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import DailyStories from './components/DailyStories'
import AddStories from './components/AddStories'
import UpdateStory from './components/UpdateStory'
import ViewStory from './components/ViewStory'
import Header from './components/Header'
function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<DailyStories/>}/>
        <Route path="/addStories" element={<AddStories/>}/>
        <Route path="/updatePage" element={<UpdateStory/>}/>
        <Route path="/viewStory" element={<ViewStory/>}/>
      </Routes>
    </Router>
  )
}

export default App
