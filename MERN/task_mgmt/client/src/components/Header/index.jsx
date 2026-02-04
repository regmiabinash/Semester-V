// nav bar
import { CiSearch } from "react-icons/ci";
import UserProfile from "./user.profile.jsx";

import React from 'react'

const NavBar = ({userInfo}) => {
  return (
    <main className="flex justify-between items-center w-full border-b border-gray-200">
        {/* logo */}
        <div>
            <p className="font-bold italic tracking-widest text-xl text-blue-500">
              Task App
              </p>
        </div>
        {/* search */}
        <div className="bg-gray-100 flex items-center w-80 border border-gray-300 px-2 py-3 rounded-nd">
            <input 
            className="w-full h-full outline-none text-sm text-gray-400"
            placeholder="Search task"
            
            />
            <button className="h-full aspect-square cursor-pointer">
            <CiSearch/>
            </button>
            {/* search icon:react - icons*/}
        </div>

        {/* use profile */}
        <UserProfile userInfo= {userInfo}/>


    </main>
  )
}

export default NavBar