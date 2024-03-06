import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header' ;
function App() {}
  //url gdje se API nalazi
  const url = "http://localhost:5000/test";

  //data i setData se koriste da mozete prikazati varijable na stranici
  const [data, setData] = useState({});

  //funkcija za dobijanje podataka od URL moze se koristiti i za slanje samo umjesto GET ide SET
  const fetchInfo = async () => {
    return await fetch(url, {
      method: "GET"
    })
      .then((res) => res.json())
      .then(data => setData(data))
  }

  useEffect(() => {
    fetchInfo();
  }, [])
  {const SearchBar = () => {
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
      <div>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button type="submit">Search</button>
        </form>
        {/* Display search results */}
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result.name}</li> /* Adjust this based on your API response structure */
          ))}
        </ul>
      </div>
    );
  }

  //sa return ide kod koji se renderuje u tagu code ide stranica ili dio a sa viticastim zagradama podatci iz data setData
  const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchInfo}>
          Neki button
        </button>

        <p>
          Edit <code>src/App.js</code> and save to reload. Number is:
          {JSON.stringify(data.value)}
        </p>

        <p>
          Just proving a point with {JSON.stringify(data.text)}
        </p>
      </header>
    </div >
  );}

  {
  function App() {
    return (
      <div className="App">
        <Header />
        {/* Other components like your main content go here */}
      </div>
    );
  }
  

}
 }
export default App;
