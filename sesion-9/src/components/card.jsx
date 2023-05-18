import React from 'react';
import '../styles/card.css'
import PropTypes from 'prop-types'
import { contacto } from '../models/contacto';

const Card = ({contacto, isConected, remove})=>{


    function Conected(){
        if(contacto.isConected){
            return (<h4>Conectado</h4>)
        }else{
            return (<h4>Desconectado</h4>)
        }
    }

    return(
        <div className='card'>
            <div className='header'>
                { Conected() }
            </div>
            <div className='body'>
                <h1>{contacto.nombre} {contacto.apellido}</h1>
            </div>
            <button onClick={()=>isConected(contacto)}>Cambiar estado</button>
            <button onClick={()=>remove(contacto)}>Eliminar</button>
        </div>
    )
}

Card.protoTypes ={
    isConected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    contacto: PropTypes.instanceOf(contacto).isRequired
}

export default Card