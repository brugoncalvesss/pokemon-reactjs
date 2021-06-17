import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Api from '../services/Api'

const PokemonCard = ({name}) => {

    const [pokemon, setPokemon] = useState([])

    const getPokemon = async (name) => {
        const res = await Api.get(`pokemon-form/${name}`)
        setPokemon(res.data)
    }

    useEffect(() => {
        getPokemon(name)
    }, [name])

    return (
        <>
            <div className="col">
                {pokemon ? (
                    <div className="card card-pokemon mb-3">
                        <div className="card-body">

                            <div className="d-flex align-items-center">
                                <div className="me-3">
                                {pokemon.sprites ? (
                                    <img
                                        src={pokemon.sprites.front_default}
                                        className="img-fluid"
                                        alt={pokemon.name}
                                    />
                                ) : (
                                    <div className="spinner-border"></div>
                                )}
                                </div>
                                <div>
                                    <div className="mb-2">
                                        <Link to={`/pokemon/${pokemon.name}/`} className="text-decoration-none text-capitalize">
                                            <strong>{pokemon.name}</strong>
                                        </Link>
                                    </div>

                                    <div>
                                        <div className="label small text-muted">
                                            Type
                                        </div>
                                        <div className="text-capitalize">
                                        {pokemon.id}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="spinner-border"></div>
                )}
            </div>
        </>
    )
}

export default PokemonCard
