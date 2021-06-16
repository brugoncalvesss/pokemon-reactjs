import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        // request
    }, [])

    return (
        <ul className="list-group list-group-flush">
            <PokemonCard id="1" />
            <PokemonCard id="2" />
            <PokemonCard id="3" />
            <PokemonCard id="4" />
        </ul>
    )
}

export default PokemonList
