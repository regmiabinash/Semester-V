import React from 'react'
import { IoPinSharp } from "react-icons/io5";
import { BiSolidTrash } from "react-icons/bi";
import { MdEdit } from "react-icons/md";




const Card = ({task}) => {
  return (
    <div className='border border-gray-300 py-3 px-4 rounded-md shadow'>
      <div className='flex justify-between'>
        <p className='text-lg font-bold text-gray-800'>Task</p>
        <IoPinSharp size={22} className='text-gray-600'/>
      </div>
    
      <div>
        <p className={`${task.priority === 'high' ? 'bg-red-500 w-[150px] rounded-md text-white font-bold text-sm py-0.5' : task.priority === 'medium' ? 'bg-yellow-500 w-[150px] rounded-md text-white font-bold text-sm py-0.5' : 'bg-green-500 w-[150px] rounded-md text-white font-bold text-sm py-0.5'}`}>
        {task.priority}
        </p>
      </div>

      <div className='flex flex-col gap-1'>
      <p className='text-{18px} font-semibold text-gray-700 line-clamp-1'>
      {task.title}
      </p>
      <p className='text-{18px} text-gray-600'>{task.text}</p>

      <div className='flex justify-end gap-2 mt-1'>
        <MdEdit title="Edit Task" size={20} className='text-blue-500'/>
        <BiSolidTrash title="Delete Task" size={16} className='text-red-500'/>



      </div>
      </div>
    </div>
  )
}

export default Card;
