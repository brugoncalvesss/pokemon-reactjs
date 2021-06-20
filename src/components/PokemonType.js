import React from 'react'

const PokemonType = ({types}) => {

    const typeItems = Array.prototype.map.call(types, type => type.type.name).join(' ')

    return (
        <>
            <div className="label small text-muted">
                Type
            </div>
            <div className="text-capitalize">
                <strong>{typeItems}</strong>
            </div>
        </>
    )
}

export default PokemonType
