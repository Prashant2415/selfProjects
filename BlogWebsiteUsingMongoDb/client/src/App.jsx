import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {
  const [count, setCount] = useState([])

  useEffect(()=>{
    const getData = async()=>{
      const response = await axios.get("http://localhost:3000").then((res)=>{
        console.log(res.data);
      })
      .catch((error)=> {console.log(error)})
      
    }
    getData();
  },[])
  return (
  <div>
    <h1>Hello</h1>
  </div>
  )
}

export default App
