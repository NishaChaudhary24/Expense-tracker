 
import React from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

function Loginrouter(){
    let Navigate = useNavigate();
    const [data,setData]=React.useState({})
    const[error,Seterror]=React.useState('')
    const[fill,setfill]=React.useState('')

    const handaleChange = (e) => {
        let name = e.target.name;
        setData({ ...data, [name]: e.target.value })     
    }


    const handaleclick = () => {
         Seterror('')
         setfill('')

         if(!data.email|| !data.password){
            setfill('Please fill the details')
            return;
         }
         
        const storedUserData = JSON.parse(localStorage.getItem('userinfo'));

        
        if (storedUserData) {
            // Check if the entered email and password match the stored data
            if (data.email === storedUserData.Email && data.password === storedUserData.Password) {
                 setTimeout(()=>{
                    Navigate('/Routerp')
                 },1000)
                 
            } else {
                Seterror("Invalid email or password. Please try again.");
            }
        } else {
            Seterror("No registered user found. Please register first.");
        }

          
         
    }
     

    return(

        <>
         <div class="cont"> 
        <div> 
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" name="email" value={data.email} onChange={handaleChange}/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" name="password" value={data.password} onChange={handaleChange}/>
                </div>
                <br/>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary" onClick={handaleclick}>Login</button> <br/>
                  <button type="submit" class="btn btn-primary"   onClick={()=>{Navigate('/')}} style={{marginLeft:'240px'}}>Goto Register</button>
                  
                </div>   
              </div>
              {error && <p style={{color:'red'}} >{error}</p>}
              
              </div>
        </>
    )
}
export default Loginrouter;
