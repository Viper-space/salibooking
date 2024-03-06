import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
      const [city, setCity] = useState('');
      const [guests, setGuests] = useState(1);
      const [checkInDate, setCheckInDate] = useState('');
      const [checkOutDate, setCheckOutDate] = useState('');
  
      const handleSearch = () => {
        console.log({ city, guests, checkInDate, checkOutDate });
        // Here you can add the logic to perform the search or pass the data up to a parent component
      };

  const SearchBar = () => {
    // State to store search query
    const [query, setQuery] = useState('');
    // State to store search results
    const [searchResults, setSearchResults] = useState([]);
  
    // Function to handle search query change
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    // Function to handle search submission
    const handleSearchSubmit = async (event) => {
      event.preventDefault();
      try {
        // Make a GET request to your API endpoint with the search query
        const response = await fetch(`http://localhost:5000/test${query}`);
        
        // Check if the request was successful (status code 200)
        if (response.ok) {
          // Convert the response to JSON format
          const data = await response.json();
          
          // Update the state with the search results
          setSearchResults(data.results);
        } else {
          // If the request was not successful, throw an error
          throw new Error('Failed to fetch search results');
        }
      } catch (error) {
        // Handle any errors that occur during the fetch process
        console.error('Error fetching search results:', error.message);
      }
    };

        return (
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search city"
                className="search-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="number"
                placeholder="Guests"
                min="1"
                className="search-input"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
              <input
                type="date"
                className="search-input"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
              <input
                type="date"
                className="search-input"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
              <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
          );
        };
      };
export default SearchBar;
