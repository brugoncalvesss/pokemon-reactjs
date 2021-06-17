import React, { useState, useEffect } from 'react'
import Api from '../services/Api'

import PokemonCard from './PokemonCard'

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])

    const getPokemon = async () => {
        const pokemons = await Api.get('pokemon/?limit=151')
        const {
            results
        } = pokemons.data

        setPokemons(results)
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <>
            {pokemons ? (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {pokemons.map(pokemon => (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                    />
                ))}
            </div>
            ) : (
                <div className="spinner-border"></div>
            )}
        </>
    )
}

export default PokemonList
