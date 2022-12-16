import React, { useContext } from 'react'
import FilmsContext from '../context/films';

export const Edit = ({ film, setIsEdited }) => {
    const { saveEditChanges } = useContext(FilmsContext);

    return (
        <div className="edit-form">
            <form onSubmit={(e) => {
                    setIsEdited(false);  {/* Actualización del estado a false para cerrar la pestaña de edición */}
                    saveEditChanges(e, film.id)
                }}>
                <input name="editedTitle" defaultValue={film.title} />
                <textarea name="editedDescription" rows="5" defaultValue={film.description} />
                <button type="submit">Actualizar</button>
            </form>

        </div>
    )
}
