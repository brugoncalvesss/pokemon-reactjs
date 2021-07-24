import React from 'react'

const Pokemonpage = ({ match }) => {

    const id = match.params.id

    return (
        <>
            <h1>Page {id}</h1>
        </>
    )
}

export default Pokemonpage
