import React, { useRef } from 'react';
import { contacto } from '../../models/contacto';
import PropTypes from 'prop-types'
import '../../styles/boton.css'

const FormularioAdd = ({add})=>{

    const nombreRef = useRef('')
    const apellidoRef = useRef('')

    function addContacto(e){
        e.preventDefault()
        const contacNew = new contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            false
        )
        add(contacNew)
    }

    return(
        <form onSubmit={addContacto}>
            <input type="text" ref={nombreRef} placeholder='Nombre' required/>
            <input type="text" ref={apellidoRef} placeholder='Apellido' required/>
            <button type='submit'>Agregar</button>
        </form>
    )
}

FormularioAdd.protoTypes ={
    add: PropTypes.func.isRequired
}

export default FormularioAdd