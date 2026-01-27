import React from 'react'

const RegisterPage = () => {
  return (
    <main className='h-full w-full flex justify-center items-center'>

    <div className='border border-sky-400 px-6 py-5 min-h-140 min-w-120 rounded-md' >
        <h1>Create Account</h1>
        <p>To create account, fill the below form</p>
        {/* form */}

        <div>
            <form>
                {/* first name */}
                <div>
                    {/* label */}
                    <label htmlFor="first_name">First Name </label>
                    {/* input */}
                    <input 
                    id="first_name" 
                    type=" text" 
                    placeholder="Biplob" required />
                    <br/>
                    
                    <label htmlFor="last_name">Last Name </label>
                    {/* input */}
                    <input 
                    id="last_name" 
                    type=" text" 
                    placeholder="Shrestha" required/>
                    

                </div>
                {/* email */}
                <div>
                    {/* label */}
                    <label htmlFor="email">Email </label>
                    {/* input */}
                    <input 
                    id="email" 
                    type="email" 
                    placeholder="Biplob@gmail.com"  required/>
                    <br/>
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    {/* input */}
                    <input 
                    id="password" 
                    type="password" 
                    placeholder="enter password" required/>
                    

                </div>
                
                <div>
                    <label htmlFor="c_password">Retype Password </label>
                    {/* input */}
                    <input 
                    id="c_password" 
                    type="password" 
                    placeholder="retype password" required/>
                    

                </div>

                {/* submit button */}
                <div>
                    <button type="submit">Create Account</button>
                </div>
                
            </form>
        </div>
    </div>



    </main>
  )
}

export default RegisterPage