import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import NavBar from '../components/header/index.jsx'
import { IoMdAdd } from 'react-icons/io'
import Card from '../components/tasks/card.jsx'
import AddEditTask from '../components/forms/task.form.jsx'
import Modal from 'react-modal'
import toast from 'react-hot-toast'
import { getUserDetail } from '../api/auth.api.js'


Modal.setAppElement("#root"); // for accessibility

const Homepage = () => {
  const [userInfo, setUserInfo] = useState(null)
  const navigate=useNavigate()

  const [isAddModalOpen, setAddModalOpen] = useState({
    type:'add',
    data:null,
    isOpen:false
  })



  const openAddModal = () =>{
    setAddModalOpen({
        type:'add',
        data:null,
        isOpen:true
    })
  }

    const onClose = () =>{
    setAddModalOpen({
        type:'add',
        data:null,
        isOpen:false
    })
  }

  // get user detail
  const getProfile = async () => {
    try {
      const response = await getUserDetail();
      setUserInfo(response.data)
      console.log(response);
      
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
      if (error?.status === 401) {
        navigate('/login');
      }
      
    }
  }

  // fetch user details on page load 
  useEffect(()=>{
    getProfile()
  },[])


  return (
    <main className='h-full w-full'>
      <NavBar/>
        {/* Task List */}
        <div className='grid grid-cols-3 gap-6 mt-10'>
          <Card/>
          
          <Card/>
          
          <Card/>
          
          <Card/>
        </div>
        {/* Add new task button */}
        <button 
        onClick={openAddModal}
         title='Add New Note'
        className='h-12 aspect-square rounded-md bg-blue-500 text-white font-bold cursor-pointer flex items-center justify-center fixed bottom-30 right-50'>
          <IoMdAdd size={24} className='font-bold'/>
          {/* add Edit task */}
        </button>
        <Modal
  isOpen={isAddModalOpen.isOpen}
  onRequestClose={onClose}
  style={{
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  }}
  className="w-[40%] h-fit mx-auto mt-16"
>
  <button
  onClick={()=> setAddModalOpen({ ...isAddModalOpen,isOpen:false})}
  className='absolute top-4 right-4 text-gray-500 hover:text-red-500 transition text-xl font-bold'
  aria-label="Close modal"
  >&times;
  </button>
  <AddEditTask  onClose={onClose}/>
</Modal>

       
    </main>
  )
}

export default Homepage