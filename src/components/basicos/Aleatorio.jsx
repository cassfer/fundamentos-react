import React from 'react';

export default function Aleatorio(props) {
    const random = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
    return (
        <div>
            <h2>Número entre: {props.min} e {props.max}</h2>
            <p>Número sorteado: {random}</p>
        </div>
    )
}