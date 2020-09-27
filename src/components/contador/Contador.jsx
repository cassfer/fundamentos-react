import React from 'react';
import PassoForm from './PassoForm';
import Botoes from './Botoes';
import "./Contador.css";
import Display from "./Display";

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo:  this.props.passoInicial || 1
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso)=>{
        this.setState({
            passo: novoPasso,
        })
    }


    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec}/>
            </div>
        )
    }

}