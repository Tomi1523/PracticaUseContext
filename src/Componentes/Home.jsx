import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {

  const { userData } = useContext( AuthContext )

  return (
    <div>
      <h2>Bienvenido {userData.name} {userData.lastName}</h2>
    </div>
  )
}

export default Home
