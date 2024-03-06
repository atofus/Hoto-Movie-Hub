import 'bootswatch/dist/vapor/bootstrap.min.css';
import Login from './Components/Login';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Register from './Pages/Register';
import { Routes } from 'react-router-dom';

//import Navbar from "./Components/navbar"
import { Home } from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// import WatchList from "./Pages/Watchlist";


function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element= {<Home />} />
          {/* <Route path="/Contact" element= {<Contact />} />
          <Route path="/About" element= {<About />} />
          <Route path="/WatchList" element= {<WatchList />} /> */}

        </Routes>

      </Router>
    </>
  );
}

export default App;
