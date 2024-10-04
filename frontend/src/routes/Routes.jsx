import React from 'react'
import {Route as R, Routes, Router, } from 'react-router-dom'
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
import RecipeList from '../components/RecipeList'
import ReportIssue from '../components/ReportIssue'
import LoginLogout from '../components/LoginLogout'
import Profile from '../pages/Profile'
import RecCollection from '../components/RecCollection'

function RouteView() {

  let user = null;
  try {
    const userString = localStorage.getItem('user');
    if (userString && userString !== 'undefined') {
      user = JSON.parse(userString);
      console.log('User retrieved from localStorage:', user);
    } else {
      console.log('No valid user found in localStorage');
    }
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
  }
  return (
   <Routes>

        <R path="/" element={<Home />} />
        <R path="/Recipes" element={<Recipes />} />
       <R path="/login" element={<Login />} />
        <R path="/userprofile" element={<UserProfile user={user} />} />
        <R path="/SignIn" element={<RegisterPage />} />
        <R path="/RegisterPage" element={<RegisterPage />} />
        <R path="/Profile" element={<Profile />} />
        {/* <R path="/SignIn" element={<SignIn />} /> 
        <R path="/Register" element={<Register />} /> */}
        <R path="/Blog" element={<BlogPage />} />
        <R path="/Contact" element={<Contact />} />
        <R path="/veganpage" element={<VeganPage />} />
         <R path="/nutsfree" element={<NutsFree />} />
         <R path="/Regular" element={<Regular />} />  
         <R path="/recipe/:id" element={<SingleRecipeCard />} />
          {/* <R path="/userprofile" element={<UserProfile />} /> */}
          <R path="/usercreate" element={<UserCreate />} />
          <R path="/recipeList" element={<RecipeList />} />
          <R path="/reportissue" element={<ReportIssue />} />
          <R path="/signIn" element={<LoginLogout />} />
          <R path="/recCollection" element={<RecCollection />} />
    </Routes>  
  )
}

export default RouteView
