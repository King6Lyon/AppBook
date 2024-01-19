import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {fetchAccount} from '../Api/apiAuthentification'
import Login from './auth/login/Login'

const RoutePrivée = () => {
    const navigate=useNavigate()
const [authuser,setAuthuser]=useState('')
const getAccout=async()=>{
    const data = await fetchAccount()
    console.log("data",data)
   setAuthuser(data)
  }
  useEffect(()=>{
  getAccout()
  
  },[])

  const token = localStorage.getItem('token')
  return (
    <div>
{
    token? (<>{authuser.role==="user"? (<Dashbord/>) : (<></>)}</>) : (<Login/>)
}



    </div>
  )
}

export default RoutePrivée