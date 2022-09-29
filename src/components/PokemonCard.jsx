import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import colors from "./colors.json";
const PokemonCard = ({url}) => {
    
    const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();
    useEffect (() => {
        axios.get(url)
        .then(res => setPokemons(res.data))
    }, [])
    return (
        <div  onClick={() => navigate(`/pokedex/${pokemons.id}`)}>
           <article className='card'>
                <div className='card-header' style={{background: colors[pokemons.types?.[0].type.name] }}> </div>
           <div  className='card-body'>
            <img src={pokemons?.sprites?.other?.dream_world?.front_default} alt="" className='card-body-img'/>
                <div className='card-body-title'>
                <h2>{pokemons.name}</h2>
                <h3>experiencia: <span>{pokemons.base_experience}</span></h3>
                </div>
            </div>
            <div className='card-type'>
                <h3>Tpyes</h3> 
                <div className='li-types'>
                {pokemons.types?.map((type) =>(
                    <li key={type.type.url} className="card-ctn-li">{type.type.name}</li>
                ))}
                </div>
            </div>
            <div className='card-footer'>
                <div className='card-footer-social'>
                 <p><b>Hp: </b><span className='footer-num'>{pokemons.stats?.[0].base_stat}</span></p>
                </div>
                <div className='card-footer-social'>
                 <p><b>Defense: </b><span className='footer-num'>{pokemons.stats?.[2].base_stat}</span></p>
                </div>
                <div className='card-footer-social'>
                 <p><b>Atack: </b><span className='footer-num'>{pokemons.stats?.[1].base_stat}</span></p>
                </div>
                <div className='card-footer-social'>
                 <p><b>Speed: </b><span className='footer-num'>{pokemons.stats?.[5].base_stat}</span></p>
                </div>
            </div>
            </article>
            
            
        </div>
    );
};

export default PokemonCard;