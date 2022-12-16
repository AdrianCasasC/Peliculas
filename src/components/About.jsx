import React from 'react'
import { Accordion } from './Accordion'

//Array de objetos para mostrar en el acordeón
const themes = [
  {
      title: "Añadir nuevas películas",
      content: "Se ha creado una sección que permite añadir nuevas películas otorgándoles el título y la descripción deseados."
  },
  {
      title: "Editar y eliminar películas",
      content: "Una vez se han creado varias películas, existe la opción de editarlas o eliminarlas haciendo click sobre el botón correspondiente."
  },
  {
      title: "Buscar películas",
      content: "En la sección del buscador se puede buscar cualquier película de la lista introduciendo algunos caracteres que conformen el título de la misma."
  },
  {
      title: "Moverse a través de las pestañas",
      content: "Se ha añadido la capacidad de que el usuario pueda moiverse entre las diferentes pestañas sin que cambie el estilo de la página accediendo de esta forma a distintos tipos de información."
  }
]

export const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">Acerca de mis pelis</h1>
      <div>
        <p>Esta aplicación se ha creado como proyecto didáctico para aplicar los conocimientos aprendidos sobre React</p>
        <p>Se pueden realizar las siguientes tareas:</p>
      </div>
      {/*Por cada elemento del array se crea un componente acordeón*/}
      <div>
        {themes.map((theme, index) => {
          return <Accordion key={index} theme={theme}/>
        })}
      </div>
    </div>
  )
}
