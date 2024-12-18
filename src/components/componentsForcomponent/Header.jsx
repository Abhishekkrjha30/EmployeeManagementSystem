/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react"
import { setLocalStorage } from "../../utils/LocalStorage"

const Header = (props) => {

  //  const [userName, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin');
  // }
  // else{
  //   setUserName(data.name);
  // }

  const logOutUser= ()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser("")
    // window.location.reload();

  }
  
  return (
    <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Hello <br /> <span className="text-3xl font-semibold ">Abhishek 👋</span> </h1>
        <button onClick={logOutUser} className="px-6 py-2 bg-red-900 text-lg rounded-lg shadow-lg shadow-black">Log Out</button>
        
    </div>
  )
}

export default Header