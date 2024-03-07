import 'bootswatch/dist/vapor/bootstrap.min.css';
import Login from './Components/Login';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Register from './Pages/Register';
import { Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import MoviePage from './Pages/MoviePage';
import Contact from './Pages/Contact';
import Watchlist from './Pages/Watchlist';
import Switch from 'react-router-dom';

import Genre from './Pages/Genre';



function App() {
  return (
    <>
      <Router>
       <Navbar/> 
        <Routes>
          <Route path="/genre/:genre" component={<Genre />} />
          <Route path="/" element={<Login />} /> {/* Default route */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/MoviePage" element={<MoviePage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Watchlist" element={<Watchlist />} />
          <Route path="/genre/:genre" component={<Genre />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
