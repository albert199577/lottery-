import './styles/App.css'
import React from "react";
import {ReactDOM} from 'react-dom/client'
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';


function App() {
  return (
    <div className='App w-screen h-screen flex flex-col justify-between'>
      <Nav />
      <HomePage />
      <Footer />
    </div>
  )
}





export default App
