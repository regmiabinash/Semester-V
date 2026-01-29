import React from 'react'
import LoginForm from '../components/forms/login.form.jsx'
import {Link} from 'react-router'
const LoginPage = () => {
  return (
    
          <main className='h-full w-full flex justify-center items-center'>

    <div className='shadow-md border border-blue-400 px-6 py-5 min-h-140 min-w-120 rounded-md' >
        <h1 className='text-3xl font-bold text-center '>Login</h1>
        <p className="mt-1 text-center text-[14px]">Login account to access your tasks</p>
        {/* form */}
        <LoginForm/>
        <p className='text-center'>
          Don't have an account? <Link to="/register"><span className='text-blue-600 italic font-semibold'>Create Account</span></Link>
        </p>

        {/* link to login page */}
        <div className='mt-1'>
        </div>
    </div>



    </main>
    
  )
}

export default LoginPage