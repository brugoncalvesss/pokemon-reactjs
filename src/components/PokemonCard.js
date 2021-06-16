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
                <Link to={`/pokemon/${pokemon.name}/`}>
                    <strong>{name}</strong>
                </Link>
            </li>
        </>
    )
}

export default PokemonCard
