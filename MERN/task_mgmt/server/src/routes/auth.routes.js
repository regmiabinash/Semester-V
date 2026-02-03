import express from 'express'
import {getUserDetail, login,register} from "../controllers/auth.controller.js"
import { authenticate } from '../middleways/auth.middleware.js'
const router = express.Router()


const middleware=(req,res,next)=>{
    console.log('route level');
    next()

}


// register
router.post('/register',register)

// login
router.post('/login',middleware,login)

router.get('/user-detail',authenticate,getUserDetail)



export default router