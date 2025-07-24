import { useState } from 'react'
import './App.css'
import 'react-router-dom'
import Paths from './Paths/Paths'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/lara-light-blue/theme.css';  
import 'primereact/resources/primereact.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Paths/>
    </>
  )
}

export default App
