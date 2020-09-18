import './App.css';
import React from 'react';

import Card from './components/layout/Card';

import UsuarioInfo from './components/condicinal/UsuarioInfo'
import ParOuImpar from './components/condicinal/ParOuImpar'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';

export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                    <Input></Input>
                </Card>
                <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>
                <Card titulo="#9 - Comunicação direta" color="#59323C">
                    <DiretaPai />
                </Card>
                <Card titulo="#8 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{ nome: 'Cassio' }} />
                </Card>
                <Card titulo="#7 - Tabela Produto" color="#3A9AD9">
                    <TabelaProdutos />
                </Card>
                <Card titulo="#6 - Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#5 - Componente Com Filhos" color="#00C8F8">
                    <Familia sobrenome="Fernandes">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Maria" />
                    </Familia>
                </Card>
                <Card titulo="#4 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={10} />
                </Card>
                <Card titulo="#03 - Framento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#02 - Com Parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Pedro" nota={8.0} />
                </Card>
                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro />
                </Card>
            </div>
        </div>
    );
}