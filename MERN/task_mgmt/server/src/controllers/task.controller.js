import Task from "../models/taskc.js";



// postbox not working . need help
//   get all task
export const getAll = async(req,res,next)=>{
    try{
        const user = req.user.id
        const tasks = await Task.find({user:user}).populate('user');
        res.status(200).json({
            message:'tasks fetched',
            data:tasks,
        })

    }catch(error){
        next(error);
    }
};


// get by id
export const getById = async(req,res,next)=>{
    try{
    const user = req.user.id
    const id = req.params.id;
    const task = await Task.findOne({_id:id, user}).populate('user');  
    if(!task){
        next({
            status:404,
            message:'Task not found'
        })
        return      
    }
    res.status(200).json({
        message:'task fetched by id',
        data:task,
    })
    }catch(error){
        next(error);
    }   
}

// create task
export const createTask = async(req,res,next)=>{
    try{
    const user=req.user.id
    const {title,text,priority,pinned}=req.body;

    if(!title){
        next({      
            status:400,
            message:'Task Title is required'
        })
        return
    }  
    if(!text){
        next({
            status:400,
            message:'Task text is required'
        })
    } 
    const task = await Task.create({title,text,priority,user,pinned}.populate('user'));
    res.status(201).json({
        message:'task created successfully',
        data:task,
    })
}catch(error){
    next(error);
}
};

// update task
export const updateTask = async(req,res,next)=>{
    try{
    const {id} = req.params;
    const user = req.user.id
    const {title,text,priority,pinned}=req.body;
    const task = await Task.findOne({_id:id,user:user}).populate('user');  
    if(!task){
        next({
            status:404,
            message:'Task not found'
        })
        return      
    }       
    if(title){
        task.title=title;
    }   
    if(text){
        task.text=text;
    }         
    if(pinned){
        task.pinned=pinned;
    }      
    await task.save();
    res.status(200).json({
        message:'task updated successfully',
        data:task,
    })
}catch(error){
    next(error);
}
};

// delete task
export const deleteTask = async(req,res,next)=>{
    try{
    const user= req.user.id
    const {id} = req.params;
    const task = await Task.findOne({_id:id,user:user}).populate('user');  
    if(!task){
        next({              
            message:'Task not found',
            status:404
        })
        return      
    }       
    await task.deleteOne();
    res.status(200).json({
        message:`task :${task._id} deleted`,
        data:null
    })
}catch(error){
    next(error);
}
};

// pinned task
export const pinTask = async(req,res,next)=>{
    try{
    const {id} = req.params;
    const {user} = req.body;
    const task = await Task.findOne({_id:id,user:user});
    if(!task){
        next({
            status:404,
            message:'Task not found'
        })
        return
    }
    task.pinned = !task.pinned;
    await task.save();
    res.status(200).json({
        message:'task pinned/unpinned successfully',
        data:task,
    })
}catch(error){
    next(error);
}
};

// get all pinned tasks
export const getAllPinned = async(req,res,next)=>{
    try{
        const tasks = await Task.find({pinned:true});
        res.status(200).json({
            message:'pinned tasks fetched',
            data:tasks,
        })
    }catch(error){
        next(error);
    }
};