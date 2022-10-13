import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import PokeInfo from './PokeInfo.jsx';
import axios from "axios";


const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const response = await axios.get(url);
    // console.log(response.data.results)
    setNextUrl(response.data.next)
    setPrevUrl(response.data.previous)
    getPokemon(response.data.results)
    setLoading(false)
  //  console.log(pokeData);
  };

  const getPokemon = async(res) => {
    res.map(async(item) => {
      const result = await axios.get(item.url)
      // console.log(result.data)
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a,b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }

  useEffect (() => {
    pokeFun();
  },[url]);

  return (
    <>
      <div className="container">
        <div className="left-container">
          <Card pokemon ={pokeData} loading={loading} infoPokemon={ poke => setPokeDex(poke) }/>

          <div className="btn-group">
            { prevUrl && <button onClick={()=> {
              setPokeData([])
              setUrl(prevUrl)
            }}>Previous</button>}
            { nextUrl && <button onClick={() => {
              setPokeData([])
              setUrl(nextUrl)
            }}>Next</button>}
          </div>
        </div>
        <div className="right-container">
          <PokeInfo data={pokeDex}/>
        </div>
      </div>
    </>
  );
};

export default Main;
