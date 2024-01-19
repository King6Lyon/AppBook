import { mongoose } from 'mongoose'
const UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }        
,role:{
    type:String,
    default:"user"
}

})
 const User = mongoose.model('utilauth',UserSchema)

 export default User