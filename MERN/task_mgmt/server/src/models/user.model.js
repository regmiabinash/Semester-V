import mongoose from 'mongoose';


const userSchema=new mongoose.Schema({

name:{
    type:String,
    required:[true,'your name is required']
},
email:{
    type:String,
    required:[true,'email is required'],
    unique:[true,'user already exists with this email']
},
password:{
    type:String,
    minLength:8,
    required:[true,'password is required']
}
},{timestamps:true})


// model
const User=mongoose.model('user',userSchema)
export default User
