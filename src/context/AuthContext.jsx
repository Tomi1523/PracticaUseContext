import { createContext, useState } from "react";

export const AuthContext = createContext()

import React from 'react'

const AuthContextProvider = ({children}) => {

    const [userData, setUserData ] = useState( {name:"", lastName: ""} )

    const data = {
        userData,
        setUserData
    }

  return (
    <div>
      <AuthContext.Provider value={data}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
