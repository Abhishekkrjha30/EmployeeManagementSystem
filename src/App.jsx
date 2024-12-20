/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"

import AdminDashboard from "./components/Dashboard/AdminDashboard"

import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
function App(){

 
  const [userData,setUserData]= useContext(AuthContext);
  // console.log(authData);
  

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser');

    if(loggedInUser){
      const userData=JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data)

    }
  },[])
  


  const handleLogin = (email,password)=>{
    if(email=='admin@gmail.com'&&password=='123'){
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));

    }
    else if(userData){
      const employee=userData.find((e)=>e.email==email&&e.password==password);
      if(employee){

        
        setUser('employee');   
        setLoggedInUserData(employee);   
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
      }
      
    }
    else{
      alert("Wrong Email or Password .");
    }

  }
//  useEffect(() => {
//    setLocalStorage();
//    getLocalStorage();
//  }, [])
 


  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}/>:''}
    {user == 'admin'?<AdminDashboard changeUser={setUser}/>:(user==='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
    
    
    
   

    </>

  )
}

export default App