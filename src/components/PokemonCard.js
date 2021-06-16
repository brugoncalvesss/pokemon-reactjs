import React, { useEffect } from 'react'

const PokemonCard = (props) => {

    const {
        name,
        url
    } = props

    useEffect(() => {
        // TODO: details
    }, [])

    return (
        <React.Fragment>
            <li className="list-group-item">
                <strong>{name}</strong>
            </li>
        </React.Fragment>
    )
}

const getId = (url) => {
    return /pokemon\/(\d+)\//.exec(url)[1] ?? 0
}

export default PokemonCard
