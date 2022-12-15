import { useState, useContext } from "react";
import { Add } from "./components/Add";
import { Film } from "./components/Film";
import { Search } from "./components/Search";
import FilmsContext from './context/films';
import { BsFillCollectionPlayFill } from "react-icons/bs"

function App() {
  const { films } = useContext(FilmsContext);
  
  const [search, setSearch] = useState("");

  const searchFilms = (e) => {
    setSearch(e.target.value.toLowerCase());

  }


  return (
    <div className="layOut">
      <header className="header">
        <h1><BsFillCollectionPlayFill /> Mis pelis</h1>
      </header>
      <nav className="nav">
        <ul>
          <li>Inicio</li>
          <li>Blog</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <section className="content">
        {search.length <= 1 ?
        (
          films.map((film, index) => {
            return <Film key={index} film={film} />
          })
        ) : (
          films.filter(film => {
            return film.title.toLowerCase().includes(search);
          }).map((film, index) => {
            return <Film key={index} film={film} />
          })
        ) 
        }
      </section>

      <aside className="lateral">
        <Search searchFilms={searchFilms}/>
        <hr />
        <Add />
      </aside>

      <footer className="footer">
        &copy; Adrián Casas WEB
      </footer>
    </div>
  );
}

export default App;
