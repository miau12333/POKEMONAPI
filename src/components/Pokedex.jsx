import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const name = useSelector((state) => state.userName);//Lo exportamos desde el redux
    const navigate = useNavigate();
    const [ pokemones, setPokemones] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [types, setTypes] = useState([]);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1440&offset=0")
        .then(res => setPokemones(res.data.results));

        axios.get ("https://pokeapi.co/api/v2/type/")
        .then(res => setTypes(res.data.results))
    }, [])

    console.log(types);

    const searchName = () => {
        navigate(`/pokedex/${nameInput}`)
    }

    const searchTypes = (typeUrl) => {
       //se maneja como si fuese un input con un onChange
        axios.get(typeUrl)
        .then(res => setPokemones(res.data.pokemon)) //
    }

    console.log(pokemones)
    const [page, setPage] = useState(1);

    const pokemonsPerPage = 20;
    const lastPokemonsIndex = page * pokemonsPerPage;
    const firstPokemonIndex = lastPokemonsIndex - pokemonsPerPage;
    const pokemonPaginated = pokemones.slice(
        firstPokemonIndex, lastPokemonsIndex
    )
    
    const totalPages = Math.ceil(pokemones.length / pokemonsPerPage )
    const pagesNumbers = [];
    const [num, setNum] = useState(1);
    const [lastnum, setLastnum] = useState(10);
    const nextnum = () => {
        setNum(num+10);
        setLastnum(lastnum+10);
    }
    const prevnum = () => {
        setNum(num-10);
        setLastnum(lastnum-10);
    }
    for (let i= num; i <= lastnum; i++){
        pagesNumbers.push(i)
    }
    useEffect
    return (
        <div>
            <div className='header'>
            <h1>POKEDEX</h1>
            <h2>Welcome {name}</h2>
            <p> Here you can find your favorite pokemon!</p>
            </div>
            <div className='search-id'>
                
                <input
                type="text"
                placeholder='buscar por nombre o id'
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                />
                <button className='btn-input' onClick={searchName}><span class="material-symbols-outlined">search</span></button>
            </div>
            <div>
                <select onChange={e => searchTypes(e.target.value)}>
                    <option value="">Selecciona una Ubicación</option>
                    {types.map(type => (
                        <option value={type.url} key={type.url}>{type.name}
                        </option>
                    ))

                    }
                    
                </select>
            </div>
            <ul className='flex'>
                {
                    pokemonPaginated.map((pokemon)=> (
                        <PokemonCard 
                        key={pokemon.url ? pokemon.url : pokemon.pokemon?.url}
                        url={pokemon.url ? pokemon.url : pokemon.pokemon?.url}/>
                    ))
                }
            </ul>
            <div className='pagination'>
            <button className='pagination-btn' onClick={() => prevnum()}
            disabled={num === 1 }><span class="material-symbols-outlined">   arrow_back_ios</span>
            </button>
            <div>
            {
                pagesNumbers.map((number) => (
                    <button className='pagination-num' onClick={() => setPage(number)}>{number}</button>
                ))
            }
            </div>
            <button className='pagination-btn' onClick={() => nextnum()}
            disabled={totalPages <= lastnum}><span class="material-symbols-outlined"> arrow_forward_ios </span>
            </button>
            </div>
        </div>
    );
};

export default Pokedex;