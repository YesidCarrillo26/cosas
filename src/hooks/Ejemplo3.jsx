/**
 * useState() y useContext()
 */

import React, {useState, useContext} from 'react'

const miContexto = React.createContext(null)

const Componente1 = () => {
    
    const state = useContext(miContexto);

    return (
    <div>
        <h1>
            El token es: {state.token}
        </h1>
        <Componente2></Componente2>
    </div>
  )
}

const Componente2 = () => {
    
    const state = useContext(miContexto);
  
    return (
    <div>
        <h2>
            La sesion es : {state.sesion}
        </h2>
        <Componente2></Componente2>
    </div>
  )
}

export default function MiComponenteConContexto() {
  
    const estadoInicial = {
        token: "1234557",
        sesion: 1
    }

    const [sessionData, setsessionData] = useState(estadoInicial)

    function ActualizarSesion(){
        sessionData(
            {
                token: "JWT123456789",
                sesion: sessionData.sesion + 1
            }
        );
    }

    return (
        <miContexto.Provider value={sessionData}>
            <h1>
                Ejemplo de useState Y useContext
            </h1>
            <Componente1></Componente1>
            <button onClick={ActualizarSesion}>Actualizar sesion</button>
        </miContexto.Provider>
  )
}
