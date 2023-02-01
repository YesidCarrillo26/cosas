import React, {useState} from 'react'
import PropTypes from 'prop-types'

const RegisterForm = props => {

    const initialData = [
        {
            user: "",
            name: "",
            email: "",
            password: ""
        }
      ];
    
      const [data, setData] = useState(initialData) 

  return (
    <div>registerForm</div>
  )
}


export default RegisterForm