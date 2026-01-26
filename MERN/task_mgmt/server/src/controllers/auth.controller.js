import { nextTick } from 'process';
import User from '../models/user.model.js'

import { hashPassword, comparePassword} from '../utils/bcrypt.utils.js';
import {generateToken} from '../utils/jwt.utils.js'
import { access } from 'fs';



//! register user

export const register = async(req,res,next) =>{
    try{
    const{name,email,password} = req.body;
    if (!name){
        // throw new Error('Your name is required');
        next({
            message: 'name is required',
            status:400
        })
    }
    if (!email){
        // throw new Error('Your email is required');
        next({
            message:'Your email is required',
            status:400
        });
    }
    if (!password){
        // throw new Error('Your password is required');
        next({
            message:'Your password is required',
            status:400
        })
    }

    const hashPass = await hashPassword(password)

    const user = await User.create({name,email,password:hashPass,});
    // console.log(data)
    res.status(201).json({
         message: `Account created`

    });
    } catch (error){
    // res.status(500).json({
    //     message:error?.message || 'something went wrong'
    // })
    next(error);
}};


//! login 
export const login = async(req,res,next) =>{
try{
    console.log('login',req.user)
    const{email,password} = req.body;
    if (!email){
        throw new Error('Your email is required');
    }
    if (!password){
        throw new Error('Your password is required');
    }
    const user=await User.findOne({email:email})

    if(!user){
        throw new Error('Invalid email or password');
    }
    const is_pass_matched=await comparePassword(password,user.password)
    if(!is_pass_matched){
        throw new Error("Invalid email or password")
    }

    const access_token=generateToken({
        id:user._id,
        email:user.email,
        name:user.name

    })

    res.status(201).json({
        message:"login success",
        data:user,
        access_token:access_token
    });

}catch(error){
        res.status(500).json({
            message:error?.message||'something went wrong'
        })
    
   
    }}

