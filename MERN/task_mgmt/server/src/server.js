import 'dotenv/config'
import { publicDecrypt } from 'crypto'
import express from 'express'
import http, { ServerResponse } from "http"
import userRoutes from './routes/userroutes.js'
import {connectDb} from './config/db.config.js'
import authRoutes from './routes/auth.routes.js'
import {errorHandler} from './middleways/middleware.js'
import taskRoutes from './routes/task.route.js'
import cors from "cors";
// express app instance
const app = express()


connectDb();
// using middleware


// using app level middleware

// 
// app.use(middleware);
// app.use(middleware2);



// const middleware3=(req,res,next)=>{
    //     // logic
    //     console.log('middleware3');
    //     next()
    
    // }
    app.use(cors({
        origin:'*'
    }))
    app.use(express.json())
    
    app.use('/users',userRoutes)
    app.use('/auth',authRoutes)
    app.use('/tasks',taskRoutes)
    
    // http server
    const server = http.createServer(app)
    
    // middleware
    






app.get('/',(req, res)=>{
    // console.log(req)

    res.status(200).json({
        message:'Hello from server!!!'
    })

    })

// using routes
app.use('/users',userRoutes)


    // update
// put



// 
server.listen(8000,()=>{
    console.log('server is running at http://localhost:8000 ')
}
)

app.use(errorHandler)



//! rest api
//* api (application programming interface)
//* rest => representational state transfer 
// 1. stateless
// 2. resources (tables like in dbms)=> uniform resources
// 3. uniform interface => /users
// 4. GET, POST, PUT/PATCH, DELETE
// 5. status code
// 100-199-> informational response
// 200-299-> success   200,201
// 300-399-> redirectional  
// 400-499-> client error 400,401,403,404
// 500-599-> server error 500,501,503

// scalable
// layered

// post or get and other method must be unique or have unique path
// CRUD -> Create, read, update,delete
// app.get('/users',(req,res)=>{

//     res.status(200).json({
//         message:"User fetched",
//         data:[],
//         success: true
//     })
// })

// create
app.post('/users',(req,res)=>{
    console.log(req.body)
    res.status(201).json({
        message:'User created',
        data:req.body

    })
})
app.get('/users',(req,res)=>{

    res.status(201).json({
        message:'aashutosh shut up'

    })
})

// endpoint -> 

//? req.body => data
//? req.params

// ! api /controller

//! middleware
//! ffunction -> req obj, res obj & next function
//! can implement custom logic
//! end req res cycle
// !call next middleware

// types
// 1.application level

// 2.route level
// 3.error handler -> err, res, next, req


// server req. > middleware> mid2> mid3>






