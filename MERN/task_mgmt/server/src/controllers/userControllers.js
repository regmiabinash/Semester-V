import User from '../models/user.model.js';





export const getUsers = async(req,res)=>{
    try{
// get id
// const id = req.params.Uid
// const data = req.body


// update user
// save
    const users = await User.find();


    res.status(200).json({
        message:'user fetched',
        data:users,
        success:true,
    }) ;
} catch(error){
    next(error);
}}

export const getUserById = async(req,res,next)=>{
    try{
    const id = req.params.id;
    const user = await User.findOne({_id:id});
    if(!user){
        next({
            status:404,
            message:'User not found'
        })
        return 
    }
    // const user = await User.findById(id);

    res.status(200).json({
        message:'user fetched by id',
        data:user,
        // success:true,
    }) ;
} catch(error){
    next(error);
}}

export const update = async(req,res,next)=>{
    try{
    const id = req.params.Uid;
    const {name}=req.body;
    const user = await User.findOne({_id:id});
    if(!user){
        next({
            status:404,
            message:"user invalid"
        })
        return
    }
    if(name){
        user.name=name;
    }
    await user.save();
    res.status(200).json({
        message:`user with id: ${id} updated`,
        data:user,
    }) ;
}catch(error){
    next(error);

}
};


export const read=(req,res)=>{
    const id=req.params.id

    res.status(200).json({
        message:`get user by id ${id}`
    })
    
}


export const remove = async(req,res)=>{
    try{

    const id = req.params.id;
    const user = await User.findOne({_id:id});
    if(!user){
        next({
            status:404,
            message:'User not found'
        })
        return
    }
    await User.deleteOne({_id:id});

    res.status(200).json({
        message: `id: ${req.params.id} deleted`

    })
}catch(error){
        next(error);
    }               

};
export const create = (req,res)=>{
    res.status(200).json({
        message: `id: ${req.params.id} created`

    })

}
