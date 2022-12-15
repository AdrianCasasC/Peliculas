import React, { useState } from 'react'
import { Edit } from "./Edit"

export const Film = ({ film, deleteFilm, saveEditChanges }) => {

    const [isEdited, setIsEdited] = useState(false);

    const editFilm = (id) => {
        setIsEdited(true);
      }

    return (
        <article className="film">
            <h2>{film.title}</h2>
            <p>{film.description}</p>
            <div className='buttons'>
                <button onClick={() => editFilm(film.id)} className='edit'>Editar</button>
                <button onClick={() => deleteFilm(film.id)} className='delete'>Eliminar</button>
            </div>
            {isEdited && <Edit film={film} saveEditChanges={saveEditChanges} setIsEdited={setIsEdited}/>}
        </article>
    )
}
