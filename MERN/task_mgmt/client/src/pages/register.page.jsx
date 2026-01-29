import React from 'react'
import RegisterForm from '../components/forms/register.form.jsx'

const RegisterPage = () => {
  return (
    <main className='h-full w-full flex justify-center items-center'>

    <div className='shadow-md border border-blue-400 px-6 py-5 min-h-140 min-w-120 rounded-md' >
        <h1 className='text-3xl font-bold text-center '>Create Account</h1>
        <p className="mt-1 text-center text-[14px]">To create account, fill the below form</p>
        {/* form */}
        <RegisterForm/>

        {/* link to login page */}
        <div className='mt-1'>
        <p className='text-center '>Already have an account?
            <span className="text-blue-600 italic font-semibold">login</span></p>
        </div>
    </div>



    </main>
  )
}

export default RegisterPage