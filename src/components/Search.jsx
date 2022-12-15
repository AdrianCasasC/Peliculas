import React, { useState } from 'react'

export const Search = ({ searchFilms }) => {


    return (
        <div className="search">
            <h2>Busca tu película</h2>
            <input name="search" onChange={searchFilms} type="text" placeholder="Título" />
        </div>
    )
}
