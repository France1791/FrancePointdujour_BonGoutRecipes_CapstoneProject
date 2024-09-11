import React from 'react';
import Home from './pages/Home';
import './App.css';
import Recipes from './pages/Recipes';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header/>
    <Routes/>
      <Footer/>
     {/* < Recipes /> */}
    </div>
  );
}

export default App;