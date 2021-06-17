import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PokemonCard = ({name}) => {

    const [pokemon, setPokemon] = useState([])

    const getPokemon = async (name) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${name}`)
        setPokemon(res.data)
    }

    useEffect(() => {
        getPokemon(name)
    }, [name])

    return (
        <>
            {pokemon ? (
                <li className="list-group-item">
                    <strong className="me-3">
                        <small className="small text-muted">#{pokemon.id}</small>
                    </strong>

                    <Link to={`/pokemon/${pokemon.name}/`}>
                        {pokemon.name}
                    </Link>

                    <img
                        src={pokemon.sprites.front_default}
                        className="img-fluid"
                        alt={pokemon.name}
                    />
                    
                </li>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default PokemonCard
