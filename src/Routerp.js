import React from "react";
import './Expence_Tracker.css'
import { useNavigate } from "react-router-dom";

function Routerp(){
    let Navigate = useNavigate();

  const [data, setData] = React.useState({})
  const [arr,setArr] = React.useState([])
  // const [id,setId] = React.useState(0)

  const id = React.useRef(0); // for each product to unique id
  const [isEditing, setIsEditing] = React.useState(Boolean);
  const [editId, setEditId] = React.useState(); // Stores ID of the edited product


  const handaleChange = (e) => {
      let name = e.target.name;
      setData({ ...data, [name]: e.target.value })     
  }

   
    //{ ...data, "id": id }
   
    const insertproduct = (id) => {
      if (isEditing) {   // is true then update editid
        const updatedArr = arr.map(item =>
          item.id === editId ? { ...data, id: editId } : item
        )
        setArr(updatedArr);
        setIsEditing(false);
        setEditId(null);
      } else {  // increment id 
        id.current += 1;  // Increment the id
        const newData = { ...data, id: id.current };  // Add the id in data object
        setArr([...arr, newData]);  // Update the array in new data
      }
      setData({});  // Clear the product data
    }
  

  // remove the prodocts info 
    const handleRemove = (index) => { 

      const updatedArr = [...arr];
      updatedArr.splice(index, 1);
      setArr(updatedArr);
    };
  
    const handleEdit = (id) => {
      const itemToEdit = arr.find(item => item.id === id);
      setData(itemToEdit);
      setIsEditing(true); // true is set for editing 
      setEditId(id);// id is store the id in seteditid
    };
  


     console.log(data)


     return(
      <>
      <div class="cont"> 
       <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputEmail4" name="name" value={data.name} onChange={handaleChange}/>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Date</label>
                <input type="date" class="form-control" id="inputPassword4" name="date" value={data.date} onChange={handaleChange}/>
              </div><br/>
              <div class="form-check">
        <input class="form-check-input" type="radio" name="money" id="flexRadioDefault1" value={"Credit"} onChange={handaleChange} />
        <label class="form-check-label" for="flexRadioDefault1">
          Credit
        </label>
      </div> <br />
      <div class="form-check">
        <input class="form-check-input" type="radio" name="money" id="flexRadioDefault2" value={"Dabit"} onChange={handaleChange} />
        <label class="form-check-label" for="flexRadioDefault2">
          Dabit
        </label>
        </div><br/>
        <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Amount</label>
                <input type="text" class="form-control" id="inputEmail4" name="amount" value={data.amount} onChange={handaleChange}/>
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Details</label>
                <input type="text" class="form-control" id="inputPassword4" name="details" value={data.details} onChange={handaleChange}/>
              </div>
              <br/> <br/>
              <div class="col-12">    
                <button type="submit" class="btn btn-primary" 
                onClick={()=>
                   {insertproduct(id)
                    //setArr([...arr,data])
                  }}

                style={{marginLeft:'270px'}}>{isEditing ? "Update" : "Submit"} </button>
              </div>
              <br/>
     <div><button className="btn btn-primary"  onClick={()=>{Navigate('/')}}>Logout</button></div>
              </div>


              <div className="d-flex flex-row mb-5 ">
        {arr.map((item) => (
          <div className="card" style={{width: "250px"}} key={item.id}>
            <h5>{item.name}</h5>
            <p>Date: {item.date}</p>
            <p>Type: {item.money}</p>
            <p>Amount: {item.amount}</p>
            <p>Details: {item.details}</p>
            <button className="btn btn-danger" onClick={() => handleRemove(item.index)}>Remove</button>
            <button className="btn btn-secondary"onClick={() => handleEdit(item.id)}>Edit</button>
          </div>
        ))}
      </div>

      </>
  )
  }
  
export default Routerp;
