import './Home.css'
import validation from '../Components/SignUpValidation';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Home = () => {

  const[searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetch(`http://localhost:3000/Contact`)
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(error => console.error(error));
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);


  return (
    <div class ="container">
          <div class = "search-container">
              <input type="text" id="SearchBar" placeholder='Search for Movie' className="Search" name='movieReg' 
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <button className="searchBtn" type="submit">
                Search
            </button>  
            {/*<script src="server.js"></script>*/}
          </div>
      
        {searchResults.map(movie => (
          <div class="info">
            <h1> {movie.title}</h1>
          </div>        
        ))
      }
    

    </div>
  )
}

export default Home
