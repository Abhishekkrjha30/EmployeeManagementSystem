/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext= createContext(); 

const AuthProvider = ({children}) => {
  // localStorage.clear()

    const [userData, setUserData] = useState(null);

 const data=getSelection();

 useEffect(() => {
     setLocalStorage();

    const {employees}=getLocalStorage();
   
    setUserData(employees);
    
    
  
 },[])
 
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
             {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider