import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes/Routes';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
    <AuthProvider>
    <Header/>

    <Routes/>

      <Footer/>
      </AuthProvider>
      {/* < Recipes /> */}
    </div>
  );
}

export default App;