
import  express  from 'express'
const userRoutes = express.Router()

import {register, login, getAll} from '../controlllers/user.js';
//middel 
import  {registerValidation,logvalidation,validation} from '../middelwars/RegisterValidation.js'
//partie auth middel ware 
import isAuth from '../middelwars/IsAuth.js'

//partie auth 


userRoutes.post('/register',registerValidation,validation,register)

//partie post login 

userRoutes.post('/login',logvalidation,validation,login)


userRoutes.get('/uracount',isAuth,(req,res)=>{
    res.send(req.userx)

})

userRoutes.get('/all',getAll)



export default userRoutes;

