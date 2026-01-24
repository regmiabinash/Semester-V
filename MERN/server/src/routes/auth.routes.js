import express from 'express'
import {login,register} from "../controllers/auth.controller.js"
const router = express.Router()


const middleware=(req,res,next)=>{
    console.log('route level');
    next()

}


// register
router.post('/register',register)

// login
router.post('/login',middleware,middleware,middleware,login)



export default router