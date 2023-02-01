import React, {useState, useEffect, useRef} from 'react'

const Ejemplo2 = props => {
  
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    const miRef = useRef();

    function incrementar1(){
        setcontador1(contador1 + 1);
    }

    function incrementar2(){
        setcontador2(contador2 + 1);
    }

    /**
     * Caso 1
     */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    //     console.log("Mostrando Referencia a elemento del DOM");
    //     console.log(miRef);
    // })


    /**
     * Caso 2
     */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
    //     console.log("Mostrando Referencia a elemento del DOM");
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * Caso 3
     */

    useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
        console.log("Mostrando Referencia a elemento del DOM");
        console.log(miRef);
    }, [contador1, contador2]);
  
    return (
    <div>
        <h1>
            Ejemplo useState, useRef y useEffect
        </h1>
        <h2>
            Contador 1: { contador1 }
        </h2>
        <h3>
            contador 2: { contador2 }
        </h3>
        <h4 ref={miRef}>
            Ejemplo elemento referenciado
        </h4>
        <div>
            <button onClick={incrementar1}></button>
            <button onClick={incrementar2}></button>
        </div>
    </div>
  )
}


export default Ejemplo2