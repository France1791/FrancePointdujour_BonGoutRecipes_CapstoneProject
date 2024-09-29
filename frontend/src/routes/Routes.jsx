import React from 'react'
import {Route as R, Routes, Router } from 'react-router-dom'
import Home from '../pages/Home'
// import RecipeList from '../components/RecipeList'
import Login from '../components/Login'
import Recipes from '../pages/Recipes'
import RegisterPage from '../components/RegisterPage'
import BlogPage from '../pages/BlogPage'
import Contact from '../components/Contact'
import VeganPage from '../components/VeganPage'
 import NutsFree from '../components/NutsFree'  
import Regular from '../components/regular'
import SingleRecipeCard from '../components/SingleRecipeCard'
import UserProfile from '../components/UserProfile'
import { useNavigate } from 'react-router-dom'
import UserCreate from '../components/UserCreate'
import RecCollection from '../components/RecCollection'
import RecipeList from '../components/RecipeList'
function RouteView() {

  const user = JSON.parse(localStorage.getItem('user'));
  return (
   <Routes>

        <R path="/" element={<Home />} />
        <R path="/Recipes" element={<Recipes />} />
       <R path="/login" element={<Login />} />
        <R path="/userprofile" element={<UserProfile user={user} />} />
        <R path="/SignIn" element={<RegisterPage />} />
        <R path="/RegisterPage" element={<RegisterPage />} />
        {/* <R path="/SignIn" element={<SignIn />} /> 
        <R path="/Register" element={<Register />} /> */}
        <R path="/Blog" element={<BlogPage />} />
        <R path="/Contact" element={<Contact />} />
        <R path="/veganpage" element={<VeganPage />} />
         <R path="/nutsfree" element={<NutsFree />} />
         <R path="/Regular" element={<Regular />} />  
         <R path="/recipe/:id" element={<SingleRecipeCard />} />
          <R path="/userprofile" element={<UserProfile />} />
          <R path="/usercreate" element={<UserCreate />} />
          <R path="/reccollection" element={<RecCollection />} />
          <R path="/recipeList" element={<RecipeList />} />
    </Routes>  
  )
}

export default RouteView
