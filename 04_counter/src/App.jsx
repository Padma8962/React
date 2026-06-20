import { useState } from 'react'


function App() {
  // let counter = 5
  const [counter , setCounter] = useState(15); //setCounter ek function hai jo ki counter variable ko update krne k liye hai                      
  const addValue = ()=>{
    // console.log("value added", Math.random()); //yeh toh work kr raha hai toh hum counter ki value increse kr k dekhte hai

    // counter = counter+1
    // console.log(`successfully incresed counter value to ${counter}`) //console m toh increse ho rhi hai counter ki value pr html m nhi ho rhi hai
    // this thing is resolved using hooks(UI updation ko react control krta hai)

    setCounter(counter+1)
  }
  const removeValue = () =>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
