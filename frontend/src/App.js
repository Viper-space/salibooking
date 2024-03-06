import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header' ;
  //sa return ide kod koji se renderuje u tagu code ide stranica ili dio a sa viticastim zagradama podatci iz data setData
  const App = () => {

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
  
    return (
    <div className="App">
      <header className="App-header">
              <Header/>
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

export default App;
