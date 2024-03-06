import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (

      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Hoto Movies
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-Home">
                <a className="nav-link active" href="/Home">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-About">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
              <li className="nav-Contact">
                <a className="nav-link" href="/Contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-Watchlist">
                <a className="nav-link" href="/Watchlist">
                  Watchlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


  )
}

export default Navbar
