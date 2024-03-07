import './Home.css';
import React, { useState } from 'react'; // Removed useEffect because it's not being used
import axios from 'axios';
import starIcon from '../Images/star-icon.png'

const Home = () => {
  const [searchTermHome, setSearchTermHome] = useState(''); // State for the search term
  const [searchResultsHome, setSearchResultsHome] = useState([]); // State for the search results

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:3001/Home', {
        searchTerm: searchTermHome
      });
      console.log(response.data); // Log the response data received from the server
      setSearchResultsHome(response.data); // Update the search results state with the data received
    } catch (error) {
      console.error("Error searching for movies:", error); // Log any errors that occur during the request
    }
  }

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          id="SearchBar"
          placeholder="Search for Movie"
          className="Search"
          value={searchTermHome}
          onChange={(e) => setSearchTermHome(e.target.value)} // Update the search term state as the user types
        />
        <button className="searchBtn" type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>

      {searchResultsHome.map(movie => (
        <div className="info" key={movie.MovieId}>
          <img src={movie.MovieImage} alt={movie.title} style={{ height: '466.67px', width: '300.33px' }} />

          <div className = "Star-Critic">
          {/* Display the title of each movie */}
          <h1 className = 'Title'  >{movie.Title}</h1> 
          

          <img className = "Star-icon" src={starIcon} alt="Star Icon" style={{ filter: 'brightness(0) invert(1)', height: '1em', width: '1em', height: '256px', width: '256px'}} />
            <h2>{movie.CriticScore}</h2>
          </div>


        </div>
      ))}
    </div>
  );
}

export default Home;
