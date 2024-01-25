
import  User  from '../models/User.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const  register=async(req,res)=>{
    try{
        //envoie de data objet mil User
        //dest bich nst3mel les variables
const {name,email,password}=req.body
//la recherche spcifique mt3 el User email unique 
const found = await User.findOne({email})
if(found){return res.json({msg:'vous avez deja un compte , bara logi '})}
const newUser = await new User(req.body)
//partie tkhlit el psword 
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(password, salt);
newUser.password = hash
newUser.save()
res.json({msg:'welcome to the groupe',newUser})
    }catch(err){
        console.log(err)
        res.json({msg:'you have something wrong with ur register'})
    }
}

const  login=async(req,res)=>{
    try{
const {email,password}=req.body
const found = await User.findOne({email})

if(!found){return res.json({msg:'please register'})}

const match = await bcrypt.compare(password,found.password )
if(!match){return res.json({msg:'psword ghalit'})}
//partie token 
const payload = {id : found._id}
var token = jwt.sign(payload,process.env.privateKey)
res.json({msg:'ur welcome login s', found,token})


}catch(err){
        console.log(err)
        res.status(400).json({msg:'you have a prob with ur login'})
    }
}

const UserUpdate=async(req,res)=>{
try{
const {id}=req.params
const updateContact = await User.findByIdAndUpdate(id,{$set:{...req.body}})
res.json({msg:'you have an update',updateContact})
}catch(err){
    console.log(err)
    res.send('you have a prob fil update')
}
}

const getAll=async(req,res)=>{
    try{
        const all = await User.find()
res.send(all)
    }catch(err){
        console.log(err)
    }
}

export { login, register, getAll, UserUpdate };
