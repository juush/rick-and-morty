import './App.css';
import HeaderComponent from './components/Header.js';
import Search from './components/Search.js';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL, PAGE_URL } from './constants.js';

function App() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    axios.get(BASE_URL + PAGE_URL)
    .then(({ data }) => {
      setCharList(data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <React.Fragment>
    <HeaderComponent />
    <Search charList={charList}/>

    </React.Fragment>
  );
}

export default App;
