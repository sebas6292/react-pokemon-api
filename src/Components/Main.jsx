import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import PokeInfo from './PokeInfo.jsx';
import axios from axios;


const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

  // const pokeFun = async () => {
  //   setLoading(true);
  //   const response = axios.get(url);
  //   console.log(response)
  // };

  // useEffect (() => {
  //   pokeFun();
  // },[url]);

  return (
    <>
      <div className="container">
        <div className="left-container">
          <Card />

          <div className="btn-group">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
        <div className="right-container">
          <PokeInfo />
        </div>
      </div>
    </>
  );
};

export default Main;
