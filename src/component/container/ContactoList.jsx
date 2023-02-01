import React from 'react'
import PropTypes from 'prop-types'
import ContactoComponent from '../pure/ContactoComponent'
import { Contacto } from '../../models/Contacto.class'

const ContactoList = props => {

  const defaultContacto = new Contacto("Yesid","Carrillo","yesid@hotmail",true);

  return (
    <div>
        <div>
            Lista:
        </div>
        <ContactoComponent contacto = {defaultContacto}></ContactoComponent>
    </div>
  )
}


export default ContactoList