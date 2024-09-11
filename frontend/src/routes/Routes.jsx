import React from 'react'
import {Route as R, Routes, Router } from 'react-router-dom'
import Home from '../pages/Home'
import RecipeList from '../components/RecipeList'
function RouteView() {
  return (
   <Routes>

        <R path="/" element={<Home />} />
        <R path="/Recipes" element={<RecipeList />} />
        {/* <R path="/signin" element={<SignIn />} /> */}

    </Routes>  
  )
}

export default RouteView
