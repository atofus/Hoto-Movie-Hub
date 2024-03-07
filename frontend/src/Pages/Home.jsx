import './Home.css'
import validation from '../Components/SignUpValidation';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.post('http://localhost:3000/Home');
    setSearchResults(response.data);
  };


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