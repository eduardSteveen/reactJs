import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComponentB from './componenteB';

class ComponentA extends Component{

    contacto = {
        Nombre: 'Eduard',
        Apellido: 'Suarez',
        Email: 'esuarez@mail.com',
        Conectado: false
    }

    render(){
        return(
            <div>
                <ComponentB contacto={this.contacto}></ComponentB>
            </div>
        )
    }
}

ComponentA.prototypes={
    Nombre: PropTypes.string,
    Apellido: PropTypes.string,
    Email: PropTypes.string,
    Conectado: PropTypes.bool
}

export default ComponentA
