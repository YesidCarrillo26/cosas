import React, {useState} from 'react'

const LoginForm = props => {

  const initialCredencials = [
    {
        user: "",
        password: ""
    }
  ];

  const [credentials, setCredentials] = useState(initialCredencials) 

  return (
    <div>LoginForm</div>
  )
}


export default LoginForm