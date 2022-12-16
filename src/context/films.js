import { createContext, useState } from 'react';

const FilmsContext = createContext();

{/* Función proveedora que alberga aquellas funciones que se desea que esten disponibles para cualquier
elemento padre e hijo */}
function Provider({ children }) {
    const [films, setFilms] = useState([]);

    const saveEditChanges = (e, id) => {
        e.preventDefault();

        {/* Actualización del nuevo valor editado. Se recorre cada elemento de "films" de tal forma que
        el elemento cuyo id coincida con el suministrado a la función, se retornará con los nuevos
        cambios aplicados, en caso contrario, simplemente se vuelve a retornar */}
        setFilms(prevValues => {
          return prevValues.map(film => {
            if (film.id === id) {
              return { ...film, title: e.target.editedTitle.value, description: e.target.editedDescription.value };
            }
    
            return film;
          })
        });
    
      }

      {/* Eliminación del elemento de "films" cuyo id coincida con el suministrado a la función. A través del
      método "filter" solo se retornan aquellos elementos cuyo id no coincida con el id argumento. */}
      const deleteFilm = (id) => {
        setFilms(prevValues => {
          return prevValues.filter(film => {
            return film.id !== id;
          })
        })
      }


    {/* Objeto con los estados y funciones que se desean acceder desde el resto de componentes */}
    const sharedElements = {
        films,
        setFilms,
        saveEditChanges,
        deleteFilm
      };
    
      return (
        <FilmsContext.Provider value={sharedElements}>
          {children}
        </FilmsContext.Provider>
      );
}

export { Provider };
export default FilmsContext;