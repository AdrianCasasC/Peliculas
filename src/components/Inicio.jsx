import React, { useState, useContext } from "react";
import { Add } from "./Add";
import { Film } from "./Film";
import { Search } from "./Search";
import FilmsContext from '../context/films';

export const Inicio = () => {
    const { films } = useContext(FilmsContext);

    const [search, setSearch] = useState("");

    {/* Función que actualiza el valor del estado "search" cada vez que cambia el valor
     del input del buscador */}
    const searchFilms = (e) => {
        setSearch(e.target.value.toLowerCase());
    }

    return (
        <div className="init">
            <section className="items">

                {/* Si el valor del texto introducido en el buscador es inferior a 1 caracter
                se mostrarán todas las películas guardadas en el estado "films", en caso contrario
                se mostrarán las películas cuyo título incluya los caracteres introducidos en el
                buscador ya sea en minúsculas o mayúsculas */}
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
                <Search searchFilms={searchFilms} />
                <hr />
                <Add />
            </aside>
        </div>
            

    )
}
