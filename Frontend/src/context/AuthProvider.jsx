import React, { createContext, useContext, useState } from 'react';
import { json } from 'react-router-dom';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const initialAuthUser = localStorage.getItem("Users");
     const[authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
     );

     return(
          <AuthContext.Provider value = {[ authUser, setAuthUser ]}>
             {children}
          </AuthContext.Provider>
     );
}

export const useauth = () => useContext(AuthContext);















// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();
// export const AuthProvider = ({children}) => {
//       const initialAuthUser = localStorage.getItem("Users");
//       const[auhtUser, setauthUser] = useState()

// }
