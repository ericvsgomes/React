
import React, { useState } from "react";

const Mega = props => {
    const [resultado, setResultados] = useState('')

    function aleatorioMega(qtde) {
        let sorteio = new Set();
        let numeros = ('');

        while (sorteio.size < qtde) {
            sorteio.add(parseInt(Math.random() * (61 - 1) + 1));
        }

        for (let item of sorteio) {
            numeros = numeros + ' ' + item
        }

        setResultados(numeros)       
    }
        
    return (
        <div>
            <h2>{ resultado }</h2>
            <button onClick={ (e) => aleatorioMega(props.quantidade) }>Gerar Números</button>
        </div>
    )
}

export default Mega


