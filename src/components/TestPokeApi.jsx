import React, { useEffect, useState } from 'react'

export default function Fetch() {
 
 const [pokemons, setPokemons] = useState([])

 useEffect(() => {
    
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')

        .then((res) => {
            return res.json();
          })
        .then((res) => {
            setPokemons(res.results);
          })
        .catch((e) => console.log(e));
      }, []);

      return (
        <div>
            {
                pokemons.map(( pokemon, index) => {
                    return (
                        <div key={index}>
                            <p>{pokemon.name}</p>
                            <img src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                        </div>

                    )}                
                )
            }           
        </div>
      ); 
}
