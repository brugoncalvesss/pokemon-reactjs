import React from 'react'

const PokemonCard = (props) => {

    const { id } = props

    return (
        <li className="list-group-item">
            PokemonCard {id}
        </li>
    )
}

export default PokemonCard
