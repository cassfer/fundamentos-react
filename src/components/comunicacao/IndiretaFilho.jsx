import React from "react";

export default function DiretaPai(props) {
    const min = 50
    const max = 70
    const gerarIdade = () => {
        return parseInt(Math.random() * (max - min) + min)
    }

    const gerarNerd = () => {
        return (Math.random() > 0.5)
    }

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                (e) => {
                    props.quandoClicar('João', gerarIdade(), gerarNerd())
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}