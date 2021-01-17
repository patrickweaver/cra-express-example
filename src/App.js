import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  let apiUrl = "/api";
  if (process.env.NODE_ENV === "development") {
    apiUrl = `http://localhost:${process.env.REACT_APP_API_PORT}${apiUrl}`;
  }

  const [randomNumber, setRandomNumber] = useState("");

  useEffect(() => {
    async function getRandomNumber() {
      const responseData = (await axios.get(apiUrl)).data;
      setRandomNumber(responseData.number);
    }
    getRandomNumber();
  },
  [apiUrl] // Required dependency but should only run once
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Random Number:</h1>
        <h2>{randomNumber}</h2>
      </header>
    </div>
  );
}

export default App;
