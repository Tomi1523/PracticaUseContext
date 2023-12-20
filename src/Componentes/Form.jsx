import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const {userData, setUserData} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleSubmit = ( event ) =>{
            event.preventDefault()
            // console.log(event.target.elements.name.value)
            // console.log(event.target.lastName.value)

            setUserData( 
                {...userData,
                    name: event.target.elements.name.value,
                    lastName: event.target.lastName.value
                } 
            )
            navigate("/home")
    }

    console.log(userData)

  return (
    <div>
      <form action='' onSubmit={ handleSubmit } >

        <input type='text' placeholder='Ingresa tu nombre' name='name'></input>
        <input type='text' placeholder='Ingresa tu apellido' name='lastName'></input>

        <button type='submit'>Ingresar</button>
      </form>
    </div>
  )
}

export default Form
