import React, { useState } from 'react'
import './Input.css'

export default function Input (props){

    const [valor, setValor] = useState('');

    function quandoMudar(e){
        setValor(e.target.value);
    }

    return(
        <div className="Input" style={{
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column'
        }}>
            <h2>{valor}</h2>
            <input className="Input" placeholder="Inicial" value={valor} onChange={quandoMudar} />
        </div>
    )
}