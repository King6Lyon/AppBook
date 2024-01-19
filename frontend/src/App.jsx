import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import RoutePrivée from './components/RoutePrivée';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';

const App = () => {
  return (
    <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/books/create' element={<CreateBook />} />
    <Route path='/books/details/:id' element={<ShowBook />} />
    <Route path='/books/edit/:id' element={<EditBook />} />
    <Route path='/books/delete/:id' element={<DeleteBook />} />
    <Route path="/" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/verification' element={<RoutePrivée/>}/>
    </Routes>
  )
}

export default App
