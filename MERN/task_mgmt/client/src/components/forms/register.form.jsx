import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { register } from '../../api/auth.api';
import toast from 'react-hot-toast';

const RegisterForm = () => {

    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        name: "",
        email: "",
        password: "",   
        c_password: " ",
    });


    const onChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    // submit form
    const onSubmit=async(e)=>{
        e.preventDefault();
        try {
            const {c_password,...rest}=formData;
            const response=await register(rest);
            
            if(response && response.data){
                toast.success(response.message || "Registration successful");
                navigate('/login')


            }
            console.log(response);
        } catch (error) {
            toast.error(error.message || "Registration failed");
            console.log(error);
            
        }
    };



  return (
    
        <div className="mt-10" shadow-lg>
            <form className="flex flex-col gap-4"
            onSubmit={onSubmit}>
                {/* first name */}
                <div className="flex flex-col gap-1">
                    {/* label */}
                    <label className="text-[16px] font-semibold" htmlFor="first_name">Full Name </label>
                    {/* input */}
                    <input 
                    onChange={onChange}
                    name="name"
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    id="first_name" 
                    type=" text" 
                    placeholder="Biplob" required />
                </div>   
             
                {/* email */}
                <div className="flex flex-col gap-1">
                    {/* label */}
                    <label className="text-[16px] font-semibold" htmlFor="email">Email </label>
                    {/* input */}
                    <input 
                    onChange={onChange}
                    name='email'
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    id="email" 
                    type="email" 
                    placeholder="Biplob@gmail.com"  required/>
                
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[16px] font-semibold" htmlFor="password">Password </label>
                    {/* input */}
                    <input 
                    onChange={onChange}
                    name='password'
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
    
  )
}

export default RegisterForm