import React, {useState} from 'react'

const loggedStyled = {
    color: 'blue'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetinStyle = (props) => {

  const [logged, setLogged] = useState(false)

  const greetingUser = () => (<p>Hola, {props.name}</p>);
  const pleaseLogin = () => (<p>Please Login</p>);

  return (
    <div style={logged ? loggedStyled: unloggedStyle}>
        <p>Hola {props.name} </p>
        <button onClick={() => {
            console.log("Boton pulsado")
            setLogged(!logged);
        }}>
            {logged ? "Logout": "Login"}
        </button>
    </div>
  )
}


export default GreetinStyle