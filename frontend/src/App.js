import 'bootswatch/dist/vapor/bootstrap.min.css';
import Login from './Components/Login';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Register from './Pages/Register';
import { Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
