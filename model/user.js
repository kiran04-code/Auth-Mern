import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required'],
        trim: true
    },
    email:{
        type:String,
        required:true,
   
    },
    password:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
    }
})

const user =  mongoose.model("users",UserSchema)

export default user 