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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  GENRES
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-action" href="#">
                    Action <br />
                  </a>
                  <a className="dropdown-adventure" href="#">
                    Adventure <br />
                  </a>
                  <a className="dropdown-fantasy" href="#">
                    Fantasy <br />
                  </a>
                  <a className="dropdown-comedy" href="#">
                    Comedy <br />
                  </a>
                  <a className="dropdown-horror" href="#">
                    Horror <br />
                  </a>
                  <a className="dropdown-romance" href="#">
                    Romance <br />
                  </a>
                  <a className="dropdown-drama" href="#">
                    Drama <br />
                  </a>
                  <a className="dropdown-sci" href="#">
                    SCI-FI <br />
                  </a> 
                  <a className="dropdown-western" href="#">
                    Western <br />
                  </a>
                  <a className="dropdown-mystery" href="#">
                    Mystery <br />
                  </a>
                  <a className="dropdown-comic" href="#">
                    Comic Book <br />
                  </a>
                  <a className="dropdown-animation" href="#">
                    Animation <br />
                  </a>

                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>


  )
}

export default Navbar
