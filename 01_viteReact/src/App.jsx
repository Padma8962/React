import { useState } from 'react'
import PrintName from './PrintName'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div>
    //     <h1>React </h1>
    //     <p> Deleted all the unwanted files and updated App.jsx and main.jsx file . Run the project using npm run dev command.</p>
    // </div>
    <PrintName/>
    
  )
}

export default App
