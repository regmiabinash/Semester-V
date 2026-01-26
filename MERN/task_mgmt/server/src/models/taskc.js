import mongoose  from "mongoose";
const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is required'],
        minlength:14,
    },
    text:{
        type:String,
        required:[true,'Text is required'],
        minlength:4,
    },
    priority:{
        type:String,
        enum:['low','medium','high'],
        default:'low',
    },
    pinned:{
        type:Boolean,
        required:true,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },


},{timestamps:true});

const Task=mongoose.model('task',taskSchema);
export default Task;