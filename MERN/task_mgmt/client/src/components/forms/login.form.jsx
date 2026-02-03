import React, { useState } from 'react'
import { login } from '../../api/auth.api';
import {replace, useNavigate} from "react-router";
import toast from 'react-hot-toast';


const LoginForm = () => {

    const navigate=useNavigate()

    const[formData,setFormData] = useState({
        email: "",
        password:"",
    });



    // const [email,setEmail]=useState('email') ;//email
    // const [password, setPassword]=useState("");



    // hook state, sideeffect, memoization
    // useState()
    // useEffect()
    // 


const handleChange = (e) =>{
    // console.log(e.target);
    // console.log(e.target.value);
    let name=e.target.name;
    let value=e.target.value;

    setFormData({
        ...formData,
        [name]:value
    })

};

console.log("state",formData);


const onFormSubmit=async(e)=>{
    try{
        e.preventDefault();
        console.log(formData);
        const response = await login(formData);
        if(response.data && response.access_token){
            localStorage.setItem('acess_token', response.access_token)
            toast.success(response.message || "Login successful");
            navigate('/'),{replace:true}
        }
        console.log("on submit", response);
        return(response.data)

    }catch(error){
        console.log(error);
        toast.error(error.message || "Login failed");
    }
};


  return (
    
        <div className="mt-10" shadow-lg>
            <form onSubmit={onFormSubmit} className="flex flex-col gap-4">

                {/* email */}
                <div className="flex flex-col gap-1">
                    {/* label */}
                    <label className="text-[16px] font-semibold" htmlFor="email">Email </label>
                    {/* input */}
                    <input 
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    onChange={handleChange}
                    value={formData.email}
                    id="email" 
                    name='email'
                    type="email" 
                    placeholder="Biplob@gmail.com"  
                    required/>
                
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[16px] font-semibold" htmlFor="password">Password </label>
                    {/* input */}
                    <input 
                    className="border border-gray-400 px-2 py-2.5 rounded-md focus:outline-blue-400"
                    onChange={handleChange}
                    value={formData.password}
                    id="password" 
                    name='password'
                    type="password" 
                    placeholder="enter password" 
                    required/>
                    

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