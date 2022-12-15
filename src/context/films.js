import { createContext, useState } from 'react';

const FilmsContext = createContext();

function Provider({ children }) {
    const [films, setFilms] = useState([]);

    const saveEditChanges = (e, id) => {
        e.preventDefault();
    
        setFilms(prevValues => {
          return prevValues.map(film => {
            if (film.id === id) {
              return { ...film, title: e.target.editedTitle.value, description: e.target.editedDescription.value };
            }
    
            return film;
          })
        });
    
      }

      const deleteFilm = (id) => {
        setFilms(prevValues => {
          return prevValues.filter(film => {
            return film.id !== id;
          })
        })
      }



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