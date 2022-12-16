import React from 'react'
import { BsFillCollectionPlayFill } from "react-icons/bs"
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom"
import { Inicio } from "../components/Inicio"
import { About } from "../components/About"
import { Contacto } from "../components/Contacto"
import { Error } from "../components/Error"

export const PrincipalRouter = () => {
    return (
        <BrowserRouter>

            <div className="layOut">
                <header className="header">
                    <h1><BsFillCollectionPlayFill /> Mis pelis</h1>
                </header>
                <nav className="nav">
                    <ul>

                        {/* Solo se aplica un cierto estilo si es la pestaña seleccionada */}
                        <li>
                            <NavLink className={({isActive}) => isActive ? "navlink selected" : "navlink"} to={"/Inicio"}>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "navlink selected" : "navlink"} to={"/About"}>Acerca de</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? "navlink selected" : "navlink"} to={"/Contacto"}>Contacto</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="content">
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/Inicio" element={<Inicio />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Contacto" element={<Contacto />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </div>
                


                <footer className="footer">
                    &copy; Adrián Casas App
                </footer>
            </div>
        </BrowserRouter>
    )
}
