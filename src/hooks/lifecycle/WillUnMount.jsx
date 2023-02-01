/**
 * Ejemplo de uso del metodo componentWillUnMount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */


import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

  componentWillUnmount(){
    console.log("Comportamiento antes de que el componente desaparezca");
  }

  render() {
    return (
      <div>
        <div>
            WillUnmount
        </div>
      </div>
    )
  }
}


export const WillUnMountHook = () => {

  useEffect(() => {

    return () => {
      console.log("Comportamiento antes de que el componente desaparesca");
    };
  }, []);
  

  return (
    <div>
        <div>
            WillUnmount
        </div>
    </div>
  )
}


export default WillUnMount

