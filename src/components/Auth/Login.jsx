/* eslint-disable react/prop-types */
import { useState } from "react"


function Login({handleLogin}){
    // console.log(handleLogin);
    

   const [email,setEmail]= useState('')
   const [password,setPassword]= useState('')

    function submitHandler(e){
        e.preventDefault()
        handleLogin(email,password);
        setEmail("");
        setPassword("");
    }

    return(
        <div className="h-screen w-screen flex justify-center items-center">
          
        <div className=" bg-zinc-900 h-[80%] rounded-xl">
            <h1 className="text-xl font-bold pt-4 pl-4" >
                Log In
            </h1>
        
            <div className="bg-zinc-900 h-[70%] px-12 rounded-xl flex justify-center items-center">
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className="flex justify-center items-center flex-col">


                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required className="border-b-2 border-b-red-900  rounded-full text-xl  bg-transparent outline-none py-1.5 px-7  " type="email" placeholder="Enter your Email" />
                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required 
                    className="border-b-2 border-b-red-900 rounded-full text-xl  bg-transparent outline-none py-1.5 px-7  mt-8"  type="password" placeholder="Enter password" />

                    <button  className="mt-10 border-none bg-red-900 rounded-2xl text-xl   outline-none py-1.5 px-28  shadow-xl shadow-black" >Log in</button>
                </form>

            </div>

        </div>
        </div>

    )
}

export default Login