import React, { useContext } from 'react'
import FilmsContext from '../context/films';
import { FcFilmReel } from "react-icons/fc"

export const Add = () => {
    const { setFilms } = useContext(FilmsContext);

    const addNewFilm = (e) => {
        e.preventDefault(); 
        
        {/* Creación de un nuevo objeto a partir de los valores recogidos en el form */}
        const newFilm = {
          id: new Date().getMilliseconds(),
          title: e.target.title.value,
          description: e.target.description.value
        };
    
        {/* Actualización del estado con el nuevo objeto */}
        setFilms(prevValues => {
          return [...prevValues, newFilm]
        })

      };

    return (
        <div className="add">
            <h2><FcFilmReel /> Añadir nueva película</h2>
            <form onSubmit={e => addNewFilm(e)}>
                <label>Título</label>
                <input  name="title" type="text" />
                <label>Descripción</label>
                <textarea  name="description" rows="5" cols="30" />
                <button type='submit'>Añadir</button>
            </form>
        </div>
    )
}
