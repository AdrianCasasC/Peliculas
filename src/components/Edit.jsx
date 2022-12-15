import React, { useContext } from 'react'
import FilmsContext from '../context/films';

export const Edit = ({ film, setIsEdited }) => {
    const { saveEditChanges } = useContext(FilmsContext);

    return (
        <div>
            <form onSubmit={(e) => {
                    setIsEdited(false);
                    saveEditChanges(e, film.id)
                }}>
                <input name="editedTitle" defaultValue={film.title} />
                <textarea name="editedDescription" defaultValue={film.description} />
                <button type="submit">Actualizar</button>
            </form>

        </div>
    )
}
