import React, { useState } from 'react'
import "./register.css"
import {registerApi}from "../../../Api/apiAuthentification"
import {useNavigate} from "react-router-dom"
const Register = () => {
  const navigate = useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


const handelRegister=async(values)=>{
try{
  await registerApi(values)
  await alert('votre enregistrement est bien effectué')
  navigate('/login')}catch(err){
  console.log(err)}

}

  return (
    <div>
        <div className="grid align__item">
      <div className="register">
        <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width={56} height={84} viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
        <h2>Register</h2>
        <form  className="form">
        <div className="form__field">
            <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}  placeholder="name" />
          </div>
          <div className="form__field">
            <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}  placeholder="email" />
          </div>
          <div className="form__field">
            <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}    placeholder="••••" />
          </div>
          <div className="form__field">
            <input type="button" defaultValue="Sign Up" onClick={()=>handelRegister({name,email,password})}   />
          </div>
        </form>
        <p>Already have an accout? <a href="/login">Log in</a></p>
      </div>
    </div>
  </div>
  )
}

export default Register