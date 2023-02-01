import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/Contacto.class'

const ContactoComponent = ({ contacto }) => {
  return (
    <div>
        <h1>
            Nombre: { contacto.nombre }
        </h1>
        <h2>
            Apellido: { contacto.apellido }
        </h2>
        <h3>
            Email: { contacto.email }
        </h3>
        <h4>
            Esta { contacto.conectado ? "Conectado": "Desconectado" }
        </h4>
    </div>
  )
}

ContactoComponent.propTypes = {
    Contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent