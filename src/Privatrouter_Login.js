import React from "react";
import { Navigate } from "react-router-dom";

function Privatrouter_Login({children}){
    const storedUserData = JSON.parse(localStorage.getItem('userinfo'));
     
  
    
const isAuth= ()=>{
    return storedUserData
}   
    return(
        <>
        {isAuth()?children:<Navigate to = '/Loginrouter'/>}
        </>
    )
    
}
export default Privatrouter_Login;
