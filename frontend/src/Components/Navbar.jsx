import './Navbar.css'
import React, { useState } from 'react'; // Removed useEffect because it's not being used
import axios from 'axios';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const genres = ['Action', 'Adventure', 'Fantasy', 'Comedy', 'Horror', 'Romance', 'Drama', 'SCI-FI', 'Western', 'Mystery', 'Comic Book', 'Animation'];

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const fetchMovies = async (genre) => {
      const response = await axios.get(`/Genre/${genre}`);
      // Handle response to display movies on the genre page
  };

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
                  Genres
                </a>
                <div className="dropdown-menu">
                  {/* <a className="dropdown-action" href="/Genre/Action">
                    Action <br />
                  </a>
                  <a className="dropdown-adventure" href="/Genre/Adventure">
                    Adventure <br />
                  </a>
                  <a className="dropdown-fantasy" href="/Genre/Fantasy">
                    Fantasy <br />
                  </a>
                  <a className="dropdown-comedy" href="/Genre/Comedy">
                    Comedy <br />
                  </a>
                  <a className="dropdown-horror" href="/Genre/Horror">
                    Horror <br />
                  </a>
                  <a className="dropdown-romance" href="/Genre/Romance">
                    Romance <br />
                  </a>
                  <a className="dropdown-drama" href="/Genre/Drama">
                    Drama <br />
                  </a>
                  <a className="dropdown-sci" href="/Genre/SCI-FI">
                    SCI-FI <br />
                  </a> 
                  <a className="dropdown-western" href="/Genre/Western">
                    Western <br />
                  </a>
                  <a className="dropdown-mystery" href="/Genre/Mystery">
                    Mystery <br />
                  </a>
                  <a className="dropdown-comic" href="/Genre/Comic">
                    Comic Book <br />
                  </a>
                  <a className="dropdown-animation" href="/Genre/Animation">
                    Animation <br />
                  </a>

                </div> 
  </li>*/}
                    {genres.map((genre) => (
                        <li key={genre}>
                            <Link to={`/Genre/${genre.toLowerCase()}`} onClick={() => fetchMovies(genre)}>
                                {genre}
                            </Link>
                        </li>
                    ))}
                    </div> 
                </li>
            </ul>
          </div>
        </div>
      </nav>


  )
}

export default Navbar
