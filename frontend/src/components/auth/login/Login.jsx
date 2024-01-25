import React, { useState } from 'react'
import "./login.css"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Login = () => {

const navigate = useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const handelLogin = async (values) => {
  try {
    const res = await axios.post('http://localhost:6319/auth/login', values);
    console.log('res login', res);

    // Vérifiez si la réponse a un message 'Bienvenue' pour indiquer une connexion réussie
    if (res.data.msg === 'Bienvenue !') {
      // Stockez le token dans le stockage local
      await localStorage.setItem('token', res.data.token);

      // Affichez un message d'accueil
      alert('Bienvenue !');

      // Redirigez l'utilisateur vers la page d'accueil
      navigate('/home');
    } else {
      // Si le message n'est pas 'Bienvenue', affichez un message d'erreur
      alert('Adresse e-mail ou mot de passe incorrect');
    }
  } catch (err) {
    // Si une erreur se produit, affichez un message d'erreur
    alert('Problème lors de la connexion');
    console.log(err);
  }
};
  return (
    <div>
    <div className="grid align__item">
      <div className="register">
        <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width={56} height={84} viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stopColor="#8ceabb" /><stop offset="100%" stopColor="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>
        <h2>Login</h2>
        <form  className="form">
        <div className="form__field">
            <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}  placeholder="email" />
          </div>
          <div className="form__field">
            <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}    placeholder="••••" />
          </div>
          <div className="form__field">
            <input type="button" defaultValue="Sign Up"   
            onClick={()=>handelLogin({email,password})}
            />
          </div>
        </form>
        <p>u dont have an accout? <a href="/">go to register</a></p>
      </div>
    </div>
  </div>
  )
}

export default Login