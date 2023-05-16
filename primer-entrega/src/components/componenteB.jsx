import React, { useState } from 'react';

const ComponentB = ({contacto})=>{

    const [est,getEst] = useState(contacto.Conectado)
    const cambio = ()=>{
        if (est===false){
            getEst(true)
        }else{
            getEst(false)
        }
    }

    return(
        <div>
            <h1>nombre: { contacto.Nombre }</h1>
            <h1>Apellido: { contacto.Apellido }</h1>
            <h2>Email: { contacto.Email }</h2>
            <h2> Estado: { est ? 'conectado':'desconectado' }</h2>
            <button onClick={cambio}>cambiar estado</button>
        </div>
    )
}

export default ComponentB;