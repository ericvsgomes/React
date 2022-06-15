import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = props => {
    return (
        <div>
            <DiretaFilho nome="João" idade={16} nerd={true} />
            <DiretaFilho nome="Pedro" idade={12} nerd={false} />
        </div>
    )
}

export default DiretaPai