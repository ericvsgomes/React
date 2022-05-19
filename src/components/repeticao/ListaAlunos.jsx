import React from "react";
import alunos from "../../data/alunos";

const listaAlunos = props => {
const alunosJSX = alunos.map(aluno => {
    return (
        <li>
            {aluno.id}) {aluno.nome} - {aluno.nota}
        </li>
    )
})

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {alunosJSX}
            </ul>
        </div>
    )
}

export default listaAlunos;