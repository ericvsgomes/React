
import React, { useState } from "react";
import './Mega.css'

const Mega = props => {
    const [resultado, setResultado] = useState()
    const [qtde, setQtde] = useState(props.quantidade || 6)

    function aleatorioMega(qtde) {
        let sorteio = new Set();
        let numeros = Array(qtde);

        while (sorteio.size < qtde) {
            sorteio.add(parseInt(Math.random() * (61 - 1) + 1));
        }

        numeros = Array.from(sorteio).sort((n1, n2) => n1 - n2)

        return numeros.join(' ')
    }
        
    return (
        <div className="Mega">
            <h2>{ resultado }</h2>
            <div>
                <label>Quantidade</label>
                <input min="6" max="15" type="number" value={qtde}
                    onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={ () => setResultado(aleatorioMega(qtde)) }>Gerar Números</button>
        </div>
    )
}

export default Mega;


