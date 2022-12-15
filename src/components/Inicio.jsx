import React, { useState, useContext } from "react";
import { Add } from "./Add";
import { Film } from "./Film";
import { Search } from "./Search";
import FilmsContext from '../context/films';

export const Inicio = () => {
    const { films } = useContext(FilmsContext);

    const [search, setSearch] = useState("");

    const searchFilms = (e) => {
        setSearch(e.target.value.toLowerCase());

    }


    return (
        <div className="init">
            <section className="items">
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
