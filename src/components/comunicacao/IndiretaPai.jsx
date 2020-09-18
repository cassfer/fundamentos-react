import React, { useState } from "react";
import IndiretaFilho from './IndiretaFilho'

export default function DiretaPai (props){

    const [nome, setNome] = useState('?');
    let [idade, setIdade] = useState(0);
    let [nerd, setNerd] = useState(false);

    // nome idade nerd

    function fornecerInformacoes(nome, idade, nerd){
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
        console.log(nome, idade, nerd);
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {nerd ? 'verdadeiro' : 'false'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}