import React from 'react'

const RegisterPage = () => {
  return (
    <main className='h-full w-full flex justify-center items-center'>

    <div className='border border-blue-400 px-6 py-5 min-h-140 min-w-120 rounded-md' >
        <h1 className='text-3xl font-bold text-center '>Create Account</h1>
        <p className="mt-1 text-center text-[14px]">To create account, fill the below form</p>
        {/* form */}

        <div className="mt-10">
            <form className="flex flex-col gap-4">
                {/* first name */}
                <div className="flex flex-col gap-1">
                    {/* label */}
                    <label className="text-[16px] font-semibold" htmlFor="first_name">First Name </label>
                    {/* input */}
                    <input 
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    id="first_name" 
                    type=" text" 
                    placeholder="Biplob" required />
                </div>   
                <div className="flex flex-col gap-1">
                    <label 
                    className="text-[16px] font-semibold" htmlFor="last_name">Last Name </label>
                    {/* input */}
                    <input 
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    id="last_name" 
                    type=" text" 
                    placeholder="Shrestha" required/>
                    

                </div>
                {/* email */}
                <div className="flex flex-col gap-1">
                    {/* label */}
                    <label className="text-[16px] font-semibold" htmlFor="email">Email </label>
                    {/* input */}
                    <input 
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    id="email" 
                    type="email" 
                    placeholder="Biplob@gmail.com"  required/>
                
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[16px] font-semibold" htmlFor="password">Password </label>
                    {/* input */}
                    <input 
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    id="password" 
                    type="password" 
                    placeholder="enter password" required/>
                    

                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-[16px] font-semibold" htmlFor="c_password">Re-type Password </label>
                    {/* input */}
                    <input 
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    id="c_password" 
                    type="password" 
                    placeholder="retype password" required/>
                    

                </div>

                {/* submit button */}
                <div className="w-full mt-4">
                    <button className="w-full bg-blue-600 py-3.5 text-white font-bold rounded-md cursor-pointer"
                    type="submit">Create Account</button>
                </div>
                
            </form>
        </div>
        {/* link to login page */}
        <p>Already have an account? <span>Login</span></p>
    </div>



    </main>
  )
}

export default RegisterPage