import React from 'react'

export const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">Acerca de mis pelis</h1>
      <div>
        <p>Esta aplicación se ha creado como proyecto didáctico para aplicar los conocimientos aprendidos sobre React</p>
        <p>Se pueden realizar las siguientes tareas</p>
        <ul>
          <li><strong>Añadir nuevas películas: </strong>Se ha creado una sección que permite 
            añadir nuevas películas otorgándoles el título y la descripción deseados.
          </li>
          <li><strong>Editar y eliminar películas: </strong>Una vez se han creado varias películas,
          existe la opción de editarlas o eliminarlas haciendo click sobre el botón correspondiente.
          </li>
          <li><strong>Buscar películas: </strong>En la sección del buscador se puede buscar cualquier
            de la lista introduciendo algunos caracteres que conformen el título de la misma.
          </li>
        </ul>
      </div>
    </div>
  )
}
