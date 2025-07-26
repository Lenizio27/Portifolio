import { useState } from 'react'
import './App.css'
import 'react-router-dom'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/lara-light-blue/theme.css';  
import 'primereact/resources/primereact.min.css'

import Paths from './Paths/Paths'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Paths/>
    </>
  )
}

export default App
