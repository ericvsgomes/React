import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css"

const TabelaProdutos = props => {
    const linhas = produtos.map((produto, i) => {
        return (      
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td>
                    { produto.id }
                </td>
                <td>
                    { produto.item }
                </td>
                <td>
                   R$ { produto.preco.toFixed(2).replace('.', ',') }
                </td>
            </tr>        
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Preço</th>
                    </tr>                
                </thead>
                <tbody>
                    { linhas }
                </tbody>
            </table>
        </div>
    )
}

export default TabelaProdutos;