import React, { useState, createContext } from 'react'
import getState from "./flux.js"; //importamos getState

  // exportamos el contexto
  export const Context = createContext(null)
   const UserProvider = ({children}) => {
      const [color1, setColor1] = useState("Yellow")
      const [color2, setColor2] = useState('Red')
      const [color3, setColor3] = useState('Grey')


    return (
      <Context.Provider value={{color1, setColor1, color2, setColor2, color3, setColor3}}>
        {children}
      </Context.Provider>
    );
  };

//exportamos el proveedor
export default UserProvider

