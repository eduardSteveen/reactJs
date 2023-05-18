import React, { useState } from 'react';
import { contacto } from '../models/contacto';
import Card from './card';
import '../styles/list_contacts.css'
import FormularioAdd from './forms/add-contact';

const List_contacts = ()=>{

    const contacto1 = new contacto("Eduard","Steveen",false)
    const contacto2 = new contacto("Eduard","Steveen",true)
    const contacto3 = new contacto("Eduard","Steveen",false)

    const [contactos,setContactos] = useState([contacto1,contacto2,contacto3])

    function isInLine(contacto){
        const index = contactos.indexOf(contacto)
        const temp = [...contactos]
        temp[index].isConected = !temp[index].isConected
        setContactos(temp)
    }

    function remove (contacto){
        const index = contactos.indexOf(contacto)
        const temp = [...contactos]
        temp.splice(index,1)
        setContactos(temp)
    }

    function agregar(contacto){
        const temp = [...contactos]
        temp.push(contacto)
        setContactos(temp)
    }

    return(
        <div className='container'>
            <div className='formulario'>
                <FormularioAdd add={agregar}></FormularioAdd>
            </div>
            <div className='listado'>
            {contactos.map((contact,index)=>{
                return(
                    <Card key={index} contacto={contact} isConected={isInLine} remove={remove}></Card>
                )
            })} 
            </div>
        </div>
    )
}

export default List_contacts