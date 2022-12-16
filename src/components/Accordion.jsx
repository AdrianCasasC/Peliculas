import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineDown } from "react-icons/ai"


export const Accordion = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false);

    {/* función que invierte el estado de "isOpen" para mostrar o no mostrar el párrafo */}
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* El componente devuelve un botón cuyas clases vendrán determinadas por
            el estado de "isOpen", en el que se imprime cada título y un párrafo que solo se mostrará
            cuando "isOpen" sea true */}
                <button className={isOpen ? "accordion open" : "accordion"} onClick={handleClick}>
                    {isOpen ? <AiOutlineDown className="exp-coll" /> : <AiOutlineLeft className="exp-coll" />}
                    {theme.title}
                </button>
            {isOpen && (<div className="panel"><p>{theme.content}</p></div>)}   
        </div>
    )
}
