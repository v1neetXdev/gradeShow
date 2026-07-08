import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState('')
  const [ans, setAns] = useState('')
  const [naam, setNaam] = useState('')
  const [subnaam, setSubnaam] = useState('')
  const [status, setStatus] = useState('')

  const buttonHandler = (e) => {
    e.preventDefault()
    const marks = Number(task)
    const subnaam = setSubnaam(naam)
    if (marks >= 80 && marks <= 100) {
      setAns("A or O")
      setStatus("Oversmart")
    }
    else if (marks >= 70 && marks <= 89) {
      setAns("B")
      setStatus("Very Good")
    }
    else if (marks >= 60 && marks <= 69) {
      setAns("C")
      setStatus("Good")
    }
    else if (marks >= 50 && marks <= 59) {
      setAns("D , FAIL")
      setStatus("Average , Need Imporovement")
    }
    else {
      setAns("E , FAIL")
      setStatus("........ Poor")
    }
    setTask('')
    setNaam('')
  }
  return (
    <>
    <div className='w-full bg-pink-700 h-40 flex flex-col justify-center items-center '>
      <h1 className='font-bold text-center py-3 px-1 text-5xl'>GradeShow made with ❤️</h1>
    </div>
    
      <form onSubmit={buttonHandler} className='flex flex-wrap flex-col justify-center items-center bg-white text-black m-10 h-full'>
        <h1 className='text-center font-bold text-5xl my-5'>Grade calculator</h1>
        <input
        className='py-2 px-1 border-3 border-blue-400 outline-blue-800 rounded-2xl font-light m-3 w-full transition-all'
          type="text"
          placeholder="Enter your name"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
        />
        <input
        className='py-2 px-1 border-3 border-blue-400 outline-blue-800 rounded-2xl font-light m-3 w-full transition-all'
          type="number"
          placeholder="Enter your marks"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        
        <div className='flex flex-wrap flex-row justify-center w-[50%]'>
        <button className='text-white bg-pink-600 p-2 font-bold hover:bg-pink-800 active:scale-95 transition-all rounded-3xl w-[100%] py-4 '>Submit</button>
        </div>
        <div className='border-2 border-pink-800 shadow-2xl hover:scale-101 transition-all mt-3 h-30 bg-pink-200 rounded-2xl flex flex-wrap flex-row justify-evenly w-full'>
            <div className='flex flex-wrap flex-col justify-evenly items-center '>
            <h1 className='font-bold'>Name : {subnaam}</h1>
            <h1 className='font-bold'>Marks : {ans}</h1>
            <h1 className='font-bold'>Status : {status}</h1>
          </div>
        </div>
      </form>
    
    </>
  )
}

export default App