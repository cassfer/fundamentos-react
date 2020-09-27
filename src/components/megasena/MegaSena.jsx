import './MegaSena.css'
import React, {useState} from 'react';

export default (props)=>{
    
    function geraAleatorio(qtd){
        var i, arr = [];
        for(i = 0; i < 60; i++){
            arr[i] = i + 1;
        }
        var p, n, tmp;
        for (p = arr.length; p;) {
            n = Math.random() * p-- | 0;
            tmp = arr[n];
            arr[n] = arr[p];
            arr[p] = tmp;
        }
        let result = [];
        for(i = 0; i < qtd; i++){
            result.push(arr[i])
        }
        let resultOrder = result.sort((a,b)=>a-b);
        return resultOrder;
    };
    const [qtd, setQtd] = useState(props.qtd || 6);
    const numerosIniciais = geraAleatorio(qtd);
    const [numeros, setNumeros] = useState(numerosIniciais);


    return(
        <div className="Mega">
            <h2>Surpresinha: </h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Números: </label>
                <input min="6" type="number" value={qtd} onChange={e=> setQtd(+e.target.value)}/>
            </div>
            <button onClick={_=> setNumeros(geraAleatorio(qtd))}>Gerar Números</button>
        </div>
    )

}