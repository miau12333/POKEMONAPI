import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



const Pokemon = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState([]);



    useEffect(()=> {
        axios 
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [id])

    console.log(pokemon)

    return (
        <div className='title'>
        <h1>Your Pokemon</h1> 
        <div className='grid-ctn' >   
            <div className='grid-item'>
                <div className='data'>
                <h1>{pokemon.name}</h1>
                <h2>#{id}</h2> 
                <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt="" />
                <div className='weight-height flex-fit'>
                    <div>
                        <h2>Weight: </h2><span>{pokemon.weight}</span>
                    </div>
                    <div>
                        <h2>Height: </h2><span>{pokemon.height}</span>
                    </div>
                </div>
                </div>
                <div className='flex-fit'>
                    <div className='types data'>
                    <h2>Types:</h2>
                    <div className='li-types'>
                        {pokemon.types?.map((type) =>(
                            <li key={type.type.url} className="card-ctn-li">{type.type.name}</li>
                        ))}
                    </div>
                    </div>
                    <div className='abilities data'>
                    <h2>Abilities:</h2>
                    <div className='li-types'>
                        {pokemon.abilities?.map((ability) =>(
                            <li key={ability.ability.url} className="card-ctn-li">{ability.ability.name}</li>
                        ))}
                    </div>
                    </div>
                </div>
                    <div className='data grid-item3'>
                    <h2>Stats Base</h2>
                        <div className='stats'>
                        <h3>hp: </h3>
                        <div className='size-bar'>  
                        <ProgressBar variant='danger' animated now={pokemon.stats?.[0].base_stat} label={`${pokemon.stats?.[0].base_stat}%`} />
                        </div>
                        </div>
                        <div className='stats'>
                        <h3>ataque: </h3>
                        <div className='size-bar'>
                        <ProgressBar variant='info' animated now={pokemon.stats?.[1].base_stat}label={`${pokemon.stats?.[1].base_stat}%`} />
                        </div>
                        </div>
                        <div className='stats'>
                        <h3>defensa: </h3>
                        <div className='size-bar'>
                        <ProgressBar variant='warning' animated now={pokemon.stats?.[2].base_stat} label={`${pokemon.stats?.[2].base_stat}%`} />
                        </div>
                        </div>
                        <div className='stats'>
                        <h3>Speed: </h3>
                        <div className='size-bar'>
                        <ProgressBar variant='success' animated now={pokemon.stats?.[5].base_stat} label={`${pokemon.stats?.[5].base_stat}%`} />
                        </div>
                        </div>
                    </div>
            </div >
            <div className='moves grid-item2'>
                <h2>Movements</h2>
            <ul>
                {pokemon.moves?.map(moves => (
                  <li  key={moves.url}>{moves.move.name}</li>
                    ))    
                    
            } 
            </ul>
            </div>
        </div>
        </div>
    );
};

export default Pokemon;

//<ul className="pokemon-stats">
//{pokemon.stats.map(item => (
//    <Stat key={item.stat.name} item={item}/>
//       ))}
//  </ul>


//<ul>
//{pokemons.map(types => (
//    types.types.map( type => (
//        <li key={type.url}>{type.name}</li>
//    ))    
//     ))

//} </ul>
//<ul>
          //  {types.map(type => (
          //              <li key={type.url}>{type.name}
          //              </li>
          //          ))

          //  } </ul>