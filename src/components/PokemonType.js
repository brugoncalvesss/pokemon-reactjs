import React from 'react'

const PokemonType = (types) => {

    const typeList = types[0].name

    return (
        <>
            <div className="label small text-muted">
                Type
            </div>
            <div className="text-capitalize">
                <strong>{typeList}</strong>
            </div>
        </>
    )
}

export default PokemonType
