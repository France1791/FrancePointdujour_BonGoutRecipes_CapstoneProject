import React from 'react';
import './App.css';
import Header from './components/header';
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