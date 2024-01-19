import axios from "axios"

export const registerApi=async(values)=>{
    const adduser = axios.post('http://localhost:6319/auth/register',{...values})
}



export const fetchAccount =async()=>{
    const token=localStorage.getItem('token');
    const {data} = await axios.get('http://localhost:6319/auth/uracount',{headers:{Authorization:token}} );
    return data 
}