import React from "react";
import './Rgisterlogin.css'
import { useNavigate } from "react-router-dom";

function Rgisterrouter(props){
  let Navigate = useNavigate();
    const [data,setData]=React.useState({})
    const[error,Seterror]=React.useState('')
    const[fill,setfill]=React.useState('') 

    const handaleChange = (e) => {
        let name = e.target.name;
        setData({ ...data, [name]: e.target.value })     
    }

    const handaleclick = () => {
        console.log(data)

        const { Name, Email, Password, address, gender } = data;

    if (!Name || !Email || !Password || !address || !gender) {
        Seterror('Please fill all the details');
        return ;
    }      
          // Store all the user data in local storage
          localStorage.setItem('userinfo', JSON.stringify(data));
          setfill("Registration successful!");
           Navigate('/')       
    }

    return(

        <>
        <div class="cont"> 
               {/* massege ne alert ni ggya ae msg ma krva  */}
        {error && <p style={{color:'red'}} >{error}</p>}
        {fill && <p style={{color:'blue'}} >{fill}</p>}  
    <h5 style={{textalign:'center' }}><i></i></h5>
    
      <div class="row g-3">
        <div class="col">
          <label for="inputPassword4" class="form-label">Name</label>
          <input type="text" class="form-control" placeholder="Name" aria-label="Name" name="Name" value={data.Name} onChange={handaleChange}/>
        </div>
      </div><br/>

      <div class="row g-3">
      <div class="col">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="text" class="form-control" placeholder="Email" aria-label="Email" name="Email" value={data.Email} onChange={handaleChange} />
        </div>

        <div class="col">
        <label for="inputPassword4" class="form-label">Password</label>
          <input type="text" class="form-control" placeholder="Password" aria-label="Password" name="Password" value={data.Password} onChange={handaleChange} />
        </div>
      </div>
      <br/>
<div> 
      <div class="col-12">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Address" name="address" value={data.address} onChange={handaleChange}/>
      </div>
      </div>
      <div>

        <br/>     
      <div class="col-md-4">
        <label for="inputState" class="form-label">Gender</label>
        <select id="inputState" class="form-select" name="gender" onChange={handaleChange}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>
      </div>
<br/>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" onClick={handaleclick}>Rgister</button> <br/>
         
        <button type="submit" class="btn btn-primary"   onClick={()=>{Navigate('/Loginrouter')}} style={{marginLeft:'260px'}}>Goto Login</button>
      </div>
    
  </div>
        </>
    )


}
export default Rgisterrouter;
