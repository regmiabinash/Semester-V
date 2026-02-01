import React from 'react'

const UserProfile = () => {
  return (
    <div className='flex items-center gap-2'>
        <div className='h-12 aspect-square border border-gray-800 flex items-center justify-center rounded-full bg-gray-100'>
            <span className='font bold text-gray-700'>JD</span>
        </div>

        <div>
        <p className="text-lg text-gray-900 font-semibold">John Doe</p>
        <p className='text-sm underline cursor-pointer w-fit text-red-500'>Log out</p>
        </div>
        

    </div>
  )
}

export default UserProfile