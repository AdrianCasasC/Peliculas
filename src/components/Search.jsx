import React from 'react'
import { FcSearch } from "react-icons/fc"

export const Search = ({ searchFilms }) => {


    return (
        <div className="search">
            <h2><FcSearch /> Busca tu película</h2>
            <input name="search" onChange={searchFilms} type="text" placeholder="Título" />
        </div>
    )
}
