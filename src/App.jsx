import React from 'react'

import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default function App(){
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <Card titulo = "Exemplo de Card"></Card>

            <Aleatorio min={1} max={10}/>
            <Fragmento />
            <Primeiro />
            <ComParametro
                titulo="Situação do aluno"
                aluno="Pedro" nota={8.0} />
        </div>
    );
}