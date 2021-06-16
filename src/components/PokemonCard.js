import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PokemonCard = (props) => {

    const {
        name
    } = props

    const [pokemon, setPokemon] = useState([])

    const getPokemon = async (name) => {
        return await axios.get(
            `https://pokeapi.co/api/v2/pokemon-form/${name}`
        ).then(response => {
            setPokemon(response.data)
        })
        .catch(error => {
            console.log('error: ', error)
        })
    }

    useEffect(() => {
        getPokemon(name)
    }, [name])

    return (
        <>
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
        </>
    )
}

export default PokemonCard
