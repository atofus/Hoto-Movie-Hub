import React, { useState } from 'react'; // Removed useEffect because it's not being used
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Navbar from "../Components/Navbar"; 


const GenrePage = () => {

    const [genres, setMovies] = useState([]);
  
    const handleGenre = async (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      try {
        // Make a POST request to the backend API
        const response = await axios.post('http://localhost:3001/Genre/${genre}', {
          searchGenre: genres
        });
        console.log(response.data); // Log the response data received from the server
        setMovies(response.data); // Update the search results state with the data received
      } catch (error) {
        console.error("Error searching for movie genre:", error); // Log any errors that occur during the request
      }
    }



  return (
      <div>

      </div>
        );
};

export default GenrePage
