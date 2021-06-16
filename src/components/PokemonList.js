import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PokemonCard from './PokemonCard'

const PokemonList = () => {

    const [pokemons, setPokemons] = useState(null)

    const getPokemon = async () => {
        return await axios.get(
            'https://pokeapi.co/api/v2/pokemon/?limit=151'
        ).then(response => {
            setPokemons(response.data.results)
        })
        .catch(error => {
            console.log('error: ', error)
        })
    }

    useEffect(() => {
        getPokemon();
    }, [])

    return (
        <>
            {pokemons ? (
            <ul className="list-group list-group-flush">
                {pokemons.map(pokemon => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                ))}
            </ul>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default PokemonList
