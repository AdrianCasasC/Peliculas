import React, { useState } from 'react'

export const Add = ({ setFilms }) => {
    //const [newFilm, setNewFilm] = useState({});

    const addNewFilm = (e) => {
        e.preventDefault();
    
        const newFilm = {
          id: new Date().getMilliseconds(),
          title: e.target.title.value,
          description: e.target.description.value
        };
    
        setFilms(prevValues => {
          return [...prevValues, newFilm]
        })

      };

    return (
        <div className="add">
            <h2>Añadir nueva película</h2>
            <form onSubmit={e => addNewFilm(e)}>
                <label>Título</label>
                <input  name="title" type="text" placeholder="Título" />
                <label>Descripción</label>
                <textarea  name="description" rows="5" cols="30" placeholder="Descripción" />
                <button type='submit'>Añadir</button>
            </form>
        </div>
    )
}
