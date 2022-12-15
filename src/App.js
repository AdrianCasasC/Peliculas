import { useState } from "react";
import { Add } from "./components/Add";
import { Film } from "./components/Film";
import { Search } from "./components/Search";

function App() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");


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

  const searchFilms = (e) => {
    setSearch(e.target.value.toLowerCase());

  }


  return (
    <div className="layOut">
      <header className="header">
        <h1>Mis pelis</h1>
      </header>
      <nav className="nav">
        <ul>
          <li>Inicio</li>
          <li>Blog</li>
          <li>Contacto</li>
          <li>Más</li>
        </ul>
      </nav>
      <section className="content">
        {search.length <= 1 ?
        (
          films.map((film, index) => {
            return <Film key={index} film={film} deleteFilm={deleteFilm} saveEditChanges={saveEditChanges} />
          })
        ) : (
          films.filter(film => {
            return film.title.toLowerCase().includes(search);
          }).map((film, index) => {
            return <Film key={index} film={film} deleteFilm={deleteFilm} saveEditChanges={saveEditChanges} />
          })
        ) 
        }
      </section>

      <aside className="lateral">
        <Search searchFilms={searchFilms}/>
        <hr />
        <Add setFilms={setFilms}/>
      </aside>

      <footer className="footer">
        &copy; Adrián Casas WEB
      </footer>
    </div>
  );
}

export default App;
