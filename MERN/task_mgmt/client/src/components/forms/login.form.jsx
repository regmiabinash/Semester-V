import React, { use, useState } from 'react'

const LoginForm = () => {
    const [email,setEmail]=useState('email') ;//email
    console.log('state',email);

const onEmailChange=(e)=>{
    console.log('email changed', e.target.value);
    setEmail(e.target.value);
}

    // hook state, sideeffect, memoization
    // useState()
    // useEffect()
    // 
    console.log('state',email)


  return (
    
        <div className="mt-10" shadow-lg>
            <form className="flex flex-col gap-4">

                {/* email */}
                <div className="flex flex-col gap-1">
                    {/* label */}
                    <label className="text-[16px] font-semibold" htmlFor="email">Email </label>
                    {/* input */}
                    <input 
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    onChange={onEmailChange}
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

                    

                

                {/* submit button */}
                <div className="w-full mt-4">
                    <button className="w-full bg-blue-600 py-3.5 text-white font-bold rounded-md cursor-pointer"
                    type="submit">Sign In</button>
                </div>
                
            </form>
        </div>
    
  )
}

export default LoginForm