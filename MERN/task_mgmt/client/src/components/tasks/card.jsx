import React from 'react'
import { IoPinSharp } from "react-icons/io5";
import { BiSolidTrash } from "react-icons/bi";
import { MdEdit } from "react-icons/md";




const Card = () => {
  return (
    <div className='border border-gray-300 py-3 px-4 rounded-md shadow'>
      <div className='flex justify-between'>
        <p className='text-lg font-bold text-gray-800'>Task</p>
        <IoPinSharp size={22} className='text-gray-600'/>
      </div>
    
      <div>
        <p className='bg-green-500 w-25 rounded-md text-white font-bold text-sm py-0.5'>High</p>
      </div>

      <div className='flex flex-col gap-1'>
      <p className='text-{18px} font-semibold text-gray-700 line-clamp-1'>Task Title</p>
      <p className='text-{14px} text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo architecto quidem dignissimos. Perferendis, voluptatibus? Pariatur, minima reiciendis porro qui voluptatibus quod laborum fugiat inventore, nihil aperiam et cumque incidunt.</p>

      <div className='flex justify-end gap-2 mt-1'>
        <MdEdit title="Edit Task" size={20} className='text-blue-500'/>
        <BiSolidTrash title="Delete Task" size={16} className='text-red-500'/>



      </div>
      </div>
    </div>
  )
}

export default Card;
