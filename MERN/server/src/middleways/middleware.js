// const middleware=(req,res,next)=>{
//     // logic
//     console.log('middleware');
//     req.user ={
//         name: 'alish'
//     }
//     next()

// };
// const middleware2=(req,res,next)=>{
//     // logic
//     console.log('middleware2',req.user);
//     res.status(200).json({
//         message:'response from middleware2'
//     })
//     // next()

// }



export const errorHandler=(error,req,res,next)=>{
console.log('error handler middleware', error)
const statusCode=error?.status ||500;
    res.status(statusCode).json({
        message: error?.message||'internal sever error',
    })
}



