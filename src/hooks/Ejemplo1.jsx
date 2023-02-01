import React, {useState} from 'react'

const Ejemplo1 = () => {
  
    const valorInicial = 0;
    const personaInicial = {
        nombre : "Martin",
        email: "yesidcaa@hotmail.com"
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    function incrementarContador(){
        setContador(contador+1);
    }

    function actualizarPersona(){
        setPersona(
            {
                nombre: "Pepe",
                email: "juan@hotmail.com"
            }
        )
    }
  
    return (
    <div>
        <h1>
            Ejemplo useState
        </h1>
        <h2>
            Contador: { contador }
        </h2>
        <h3>
            Datos de la persona:
        </h3>
        <h4>
            Nombre: { persona.nombre }
        </h4>
        <h5>
            Email: { persona.email }
        </h5>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  )
}

export default Ejemplo1
