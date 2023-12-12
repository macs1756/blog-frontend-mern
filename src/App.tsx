import React from 'react'
import Layout from './Components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import CatalogPosts from './Pages/CatalogPosts'
import SinglePost from './Pages/SinglePost'
import AddPost from './Pages/AddPost'
import EditPost from './Pages/EditPost'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='posts' element={<CatalogPosts />} />
        <Route path='post/:id' element={<SinglePost />} />
        <Route path='add-post' element={<AddPost />} />
        <Route path='edit-post/:id' element={<EditPost />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <ToastContainer position='bottom-right' />
    </Layout>
  );
}

export default App
