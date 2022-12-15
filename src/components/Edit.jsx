import React from 'react'

export const Edit = ({ film, saveEditChanges, setIsEdited }) => {
    

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
