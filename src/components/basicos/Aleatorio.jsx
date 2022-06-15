//max - min - sortear forma aletoria
import React from "react";

const Aleatorio = (props) => {
    const {min, max} = props
    const sorteio = parseInt(Math.random() * (max - min)) + min;
    return (
    <div>
        <h2>Valor Aleatório</h2>
        <p>Valor minimo: { min }</p>        
        <p>Valor máximo: { max }</p>        
        Sorteio: { sorteio }
    </div>
    )
}

export default Aleatorio;