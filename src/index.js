import ReactDOM from 'react-dom'
import React from 'react';
import './index.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';


ReactDOM.render(
    <div id="app">
        <Fragmento/>
        <Primeiro />
        <ComParametro 
            titulo="Situação do aluno" 
            aluno="Pedro" nota={8.0} />
    </div>,
    document.getElementById('root')
)