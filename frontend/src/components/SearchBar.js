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

export default SearchBar;
