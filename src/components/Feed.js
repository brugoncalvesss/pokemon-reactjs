import React, { useState, useEffect } from 'react'
import Api from '../services/Api'
import Card from './Card'

const Feed = () => {

    const [pokemons, setPokemons] = useState(false)

    useEffect(
        () => {
            const getPokemons = async () => {
                const response = await Api.get('/pokemon/?limit=10')
                setPokemons(response.data.results)
            }

            getPokemons()
        },
        []
    )

    return (
        <>
            {pokemons ? (
                <div className="row row-cols-sm-2 row-cols-md-3">
                    {pokemons.map((pokemon, index) => (
                        <div className="col">
                        <Card key={index} name={pokemon.name} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </>
    )
}

export default Feed
