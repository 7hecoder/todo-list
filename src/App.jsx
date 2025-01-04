import { useState } from 'react'
import Navbar from './Components/Navbar'
import Programm from './Components/Programm';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Programm />
    </>
  )
}

export default App
