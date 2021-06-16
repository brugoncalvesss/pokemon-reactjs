import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard'

const PokemonList = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [pokemons, setPokemons] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setPokemons(response.data.results)
            })
            .catch(error => {
                console.log('error: ', error)
            })
    }, [])

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default PokemonList
