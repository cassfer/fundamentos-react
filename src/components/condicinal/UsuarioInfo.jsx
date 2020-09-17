import React from 'react';

export default function UsuarioInfo (props){
    return(
        <div>
            Seja bem vindo! <strong>{props.usuario.nome}</strong>!
        </div>
    );
};