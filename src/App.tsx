import React from 'react'
import Layout from './Components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import CatalogPosts from './Pages/CatalogPosts';
import SinglePost from './Pages/SinglePost';
import AddPost from './Pages/AddPost';
import EditPost from './Pages/EditPost';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='posts' element={<CatalogPosts />} />
        <Route path='post/:id' element={<SinglePost />} />
        <Route path='add-post' element={<AddPost />} />
        <Route path='edit-post' element={<EditPost />} />
      </Routes>
    </Layout>
  );
}

export default App
