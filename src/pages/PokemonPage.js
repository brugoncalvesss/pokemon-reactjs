import React from 'react'

const PokemonPage = ({ match }) => {

    const id = match.params.id

    return (
        <>
            <h1>Page {id}</h1>
        </>
    )
}

export default PokemonPage
