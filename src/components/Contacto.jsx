import React from 'react'
import { BsLinkedin, BsFillTelephoneForwardFill } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

export const Contacto = () => {
  return (
    <div className="contact">
      <h1>¡Contacta conmigo!</h1>
      <p>Para ponerte en contacto conmigo puedes hacerlo a través de los siguientes enlaces:</p>
      <ul>
        <li><a href="mailto:casasc.adrian@gmail.com"><SiGmail className="icon"/> Envíame un correo electrónico</a></li>
        <li><a href="tel:+34626244097"><BsFillTelephoneForwardFill className="icon"/> Llámame: +34 626244097</a></li>
        <li><a href="https://www.linkedin.com/in/adri%C3%A1n-casas-cuartero-22a565214/"><BsLinkedin className="icon"/> LinkedIn</a></li>
      </ul>
    </div>
  )
}
