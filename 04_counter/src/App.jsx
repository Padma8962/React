import { useState } from 'react'


function App() {
  // let counter = 5
  const [counter , setCounter] = useState(15); //setCounter ek function hai jo ki counter variable ko update krne k liye hai                      
  const addValue = ()=>{
    // console.log("value added", Math.random()); //yeh toh work kr raha hai toh hum counter ki value increse kr k dekhte hai

    // counter = counter+1
    // console.log(`successfully incresed counter value to ${counter}`) //console m toh increse ho rhi hai counter ki value pr html m nhi ho rhi hai
    // this thing is resolved using hooks(UI updation ko react control krta hai)

    // setCounter(counter+1)

    // what if i have more the one setCounter method?
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // what will be the ans 15,16,17 or 19
    // output : ek click pr ek hi value bad rahi hai kyumki useState ui m updates batch m bhejta hai toh agr same kam baar baar update hora hota hia toh vo same batch m jaata hai ui m

    // agr humko 18 hi output chaiye ek hi click m toh kese karenge?
    setCounter(preCounter=> //preCounter is the last updated state 
            preCounter + 1 
    )
    setCounter(preCounter=> //preCounter is the last updated state 
            preCounter + 1 
    )
    setCounter(preCounter=> //preCounter is the last updated state 
            preCounter + 1 
    )
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
