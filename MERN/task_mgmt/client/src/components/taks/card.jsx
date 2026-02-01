import React from 'react'
import { IoPinSharp } from "react-icons/io5";
import { BiSolidTrash } from "react-icons/bi";
import { MdEdit } from "react-icons/md";




export const Card = () => {
  return (
    <div>
      <div>
        <p>Task</p>
        <IoPinSharp/>
        
      </div>
      <div>
      <p>Task Title</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo architecto quidem dignissimos. Perferendis, voluptatibus? Pariatur, minima reiciendis porro qui voluptatibus quod laborum fugiat inventore, nihil aperiam et cumque incidunt.</p>

      <div>
        <MdEdit/>
        <BiSolidTrash/>



      </div>
      </div>
    </div>
  )
}
