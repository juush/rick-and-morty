import './App.css';
import RandomComponent from './components/RandomComponent.js'
import HeaderComponent from './components/Header.js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from './constants.js';



function App() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL)
    .then(({ data }) => {
      setCharList(data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <>
    <HeaderComponent />
    <RandomComponent charList={charList}/>
    </>
  );
}

export default App;
