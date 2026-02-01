import React from 'react'
import NavBar from '../components/Header/index.jsx'
import { IoMdAdd } from "react-icons/io";
import { Card } from '../components/taks/card.jsx';



const HomePage = () => {
  return (
    <main className='h-full w-full'>
        <NavBar/>
        <div className='grid grid-cols-3 gap-6 mt-10'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>

        {/* task list */}
        <button 
        title='Add New Note'
        
        className='fixed bottom-30 right-50 h-13 aspect-square rounded-md bg-blue-500 text-white font-bold cursor-pointer flex items-center justify-center'>
          <IoMdAdd size={24} className='font-bold'/>
        </button>
    </main>
  )
}

export default HomePage