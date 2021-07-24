import React, { useEffect, useState } from 'react'
import Api from '../services/Api'

const Card = ({name}) => {

    const [pokemon, setPokemon] = useState(false)

    useEffect(
        () => {
            const getPokemon = async (name) => {
                const response = await Api.get(`pokemon/${name}`)
                setPokemon(response.data)
            }
            getPokemon(name)
        },
        [name]
    )

    return (
        <>
            {pokemon ? (
                <div className="card mb-4">
                    <img src="..." className="card-img-top" alt={pokemon.name} />
                    <div className="card-body">
                        <div>
                            <strong className="text-muted small">Nº {pokemon.id}</strong>
                        </div>

                        <h5 className="card-title text-capitalize">{pokemon.name}</h5>

                        <div>
                            <strong className="text-muted small">Type</strong>
                            {/* {pokemon.types} */}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </>
    )
}

export default Card
