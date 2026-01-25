import { verifyToken } from "../utils/jwt.utils.js"
import User from "../models/user.model.js";


// 
export const authenticate =async(req,res,next)=>{
    try{
        // get access token from auth header
        const token=req.headers['authorization']
        console.log(token)
        if(!token){
            next({
                status:401,
                message:'Unauthorized access. Denied'
            })
            return
        }
        // check token validity

        const decoded_data=verifyToken(token)
        console.log(decoded_data)

        if(!decoded_data){
            next({
                message:"Invalid token",
                status:400
            })

        }


        // token expiry
        if(decoded_data.exp *1000 < Date.now()){
            next({
                message:"unauthorized access. token expired",
                status:401
            })
            return

        }

        const user = await User.findOne({_id:decoded_data.id, email:decoded_data.email})

        if(!user){
            next({
                message:"User not found",
                status:404
            })
            return
        }
        req.user={
            id:user._id,
            email:user.email,
        }
        next()
    }catch(error){
        next(error)
    }
}